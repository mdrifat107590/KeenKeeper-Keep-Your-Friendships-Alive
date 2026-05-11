"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { timelineSeed } from "@/data/timelineSeed";
import { ToastStack } from "@/components/layout/ToastStack";

const STORAGE_KEY = "keenkeeper_timeline";
const TimelineContext = createContext(null);

function sortByDateDesc(entries) {
  return [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getInitialTimeline() {
  if (typeof window === "undefined") {
    return sortByDateDesc(timelineSeed);
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return sortByDateDesc(timelineSeed);
  }

  try {
    const parsed = JSON.parse(raw);
    return sortByDateDesc(parsed);
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return sortByDateDesc(timelineSeed);
  }
}

export function AppProviders({ children }) {
  const [timelineEntries, setTimelineEntries] = useState(getInitialTimeline);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (timelineEntries.length === 0) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(timelineEntries));
  }, [timelineEntries]);

  const pushToast = useCallback((message) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setToasts((prev) => [...prev, { id, message }]);

    window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2600);
  }, []);

  const addInteraction = useCallback((type, friendName) => {
    const action = type[0].toUpperCase() + type.slice(1);
    const entry = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      type,
      title: `${action} with ${friendName}`,
      date: new Date().toISOString().split("T")[0],
    };

    setTimelineEntries((prev) => sortByDateDesc([entry, ...prev]));
    pushToast(`${action} saved for ${friendName}`);
    return entry;
  }, [pushToast]);

  const value = useMemo(
    () => ({ timelineEntries, addInteraction, pushToast }),
    [timelineEntries, addInteraction, pushToast]
  );

  return (
    <TimelineContext.Provider value={value}>
      {children}
      <ToastStack toasts={toasts} />
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  const context = useContext(TimelineContext);

  if (!context) {
    throw new Error("useTimeline must be used within AppProviders");
  }

  return context;
}
