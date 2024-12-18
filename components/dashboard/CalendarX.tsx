import React, {useEffect} from 'react';
import {ScheduleXCalendar, useNextCalendarApp} from '@schedule-x/react';
import {createViewDay, createViewMonthGrid, createViewWeek,} from '@schedule-x/calendar';
import {createEventsServicePlugin} from '@schedule-x/events-service';

import '@schedule-x/theme-default/dist/index.css';
import {createEventModalPlugin} from "@schedule-x/event-modal";
import {createDragAndDropPlugin} from "@schedule-x/drag-and-drop";

const CalendarApp: React.FC = () => {
    const calendar = useNextCalendarApp(
        {
            views: [
                createViewWeek(),
                createViewMonthGrid(),
                createViewDay()
            ],
            events: [
                {
                    id: '1',
                    title: 'Запись',
                    start: '2024-12-16 15:30',
                    end: '2024-12-16 17:00',
                    description: "Abeu Temirlan"
                },
            ],
            plugins: [
                createEventModalPlugin(),
                createDragAndDropPlugin(),
                createEventsServicePlugin()
            ],
        }
    );

    useEffect(() => {
        const calendarWithEventsService = calendar as unknown as { eventsService: any };
        calendarWithEventsService?.eventsService?.getAll();
    }, [calendar]);

    return (
        <div>
            <ScheduleXCalendar calendarApp={calendar}/>
        </div>
    );
};

export default CalendarApp;
