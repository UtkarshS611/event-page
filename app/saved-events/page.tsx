"use client";
import React, { useEffect, useState } from 'react'

interface EventData {
  eventName: string
  collegeName: string
  description: string
}

const SavedEvents = () => {
  const [savedEvents, setSavedEvents] = useState<EventData[]>([])

  useEffect(() => {
    const events: EventData[] = []
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith("event_")) {
        const data = localStorage.getItem(key)
        if (data) {
          try {
            const parsed: EventData = JSON.parse(data)
            events.push(parsed)
          } catch (error) {
            console.error(`Failed to parse ${key}:`, error)
          }
        }
      }
    }
  
    setSavedEvents(events)
  }, [])


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Saved Events</h1>
      {savedEvents.length === 0 ? (
        <p>No events saved yet.</p>
      ) : (
        savedEvents.map((event, index) => (
          <div key={index} className="border rounded p-4 mb-3 shadow">
            <h2 className="text-xl font-semibold">{event.eventName}</h2>
            <p className="text-sm text-gray-600">{event.collegeName}</p>
            <p className="mt-2">{event.description}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default SavedEvents