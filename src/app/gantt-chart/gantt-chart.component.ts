import { Component } from '@angular/core';

@Component({
  selector: 'app-gantt-chart',
  standalone: true,
  imports: [],
  templateUrl: './gantt-chart.component.html',
  styleUrl: './gantt-chart.component.css'
})
export class GanttChartComponent {

  ngAfterViewInit(): void {
    this.initGanttChart();
  }

  private initGanttChart(): void {
    // Check if the Gantt chart library is available
    if (!(window as any).gantt) {
      console.error('Gantt chart library is not loaded.');
      return;
    }

    // Configuration for the Gantt chart
    (window as any).gantt.config.date_format = "%Y-%m-%d";
    (window as any).gantt.config.duration_unit = "day";
    (window as any).gantt.config.scale_unit = "day";
    (window as any).gantt.config.step = 1;
    (window as any).gantt.config.date_scale = "%d %M";
    (window as any).gantt.config.subscales = [
      { unit: "day", step: 1, date: "%j, %D" }
    ];

    // Initialize Gantt chart
    (window as any).gantt.init("gantt_here");

    // Sample data
    const data = [
      {
        id: 1,
        text: "Room 1",
        start_date: "2024-08-01",
        end_date: "2024-10-31",
        duration: 7,
        roomId: 1,
        minStay: 2,
        maxStay: 7
      },
      {
        id: 2,
        text: "Room 2",
        start_date: "2024-08-05",
        end_date: "2024-10-30",
        duration: 3,
        roomId: 2,
        minStay: 3,
        maxStay: 10
      },
      {
        id: 3,
        text: "Room 3",
        start_date: "2024-08-10",
        end_date: "2024-10-28",
        duration: 0,
        roomId: 3,
        minStay: 1,
        maxStay: 5
      },
      {
        id: 4,
        text: "Room 4",
        start_date: "2024-08-15",
        end_date: "2024-10-25",
        duration: 0,
        roomId: 4,
        minStay: 2,
        maxStay: 8
      },
      {
        id: 5,
        text: "Room 5",
        start_date: "2024-08-20",
        end_date: "2024-10-31",
        duration: 0,
        roomId: 5,
        minStay: 3,
        maxStay: 6
      },
      {
        id: 6,
        text: "Room 6",
        start_date: "2024-08-01",
        end_date: "2024-10-30",
        duration: 0,
        roomId: 6,
        minStay: 2,
        maxStay: 5
      },
      {
        id: 7,
        text: "Room 7",
        start_date: "2024-08-05",
        end_date: "2024-10-28",
        duration: 0,
        roomId: 7,
        minStay: 4,
        maxStay: 10
      },
      {
        id: 8,
        text: "Room 8",
        start_date: "2024-08-10",
        end_date: "2024-10-25",
        duration: 0,
        roomId: 8,
        minStay: 3,
        maxStay: 9
      },
      {
        id: 9,
        text: "Room 9",
        start_date: "2024-08-15",
        end_date: "2024-10-31",
        duration: 0,
        roomId: 9,
        minStay: 1,
        maxStay: 4
      },
      {
        id: 10,
        text: "Room 10",
        start_date: "2024-08-20",
        end_date: "2024-10-30",
        duration: 0,
        roomId: 10,
        minStay: 2,
        maxStay: 7
      },
      {
        id: 11,
        text: "Room 11",
        start_date: "2024-08-01",
        end_date: "2024-10-31",
        duration: 0,
        roomId: 11,
        minStay: 3,
        maxStay: 8
      },
      {
        id: 12,
        text: "Room 12",
        start_date: "2024-08-05",
        end_date: "2024-10-28",
        duration: 0,
        roomId: 12,
        minStay: 2,
        maxStay: 6
      },
      {
        id: 13,
        text: "Room 13",
        start_date: "2024-08-10",
        end_date: "2024-10-25",
        duration: 0,
        roomId: 13,
        minStay: 1,
        maxStay: 5
      },
      {
        id: 14,
        text: "Room 14",
        start_date: "2024-08-15",
        end_date: "2024-10-31",
        duration: 0,
        roomId: 14,
        minStay: 4,
        maxStay: 10
      },
      {
        id: 15,
        text: "Room 15",
        start_date: "2024-08-20",
        end_date: "2024-10-30",
        duration: 0,
        roomId: 15,
        minStay: 3,
        maxStay: 9
      },
      {
        id: 16,
        text: "Room 16",
        start_date: "2024-08-01",
        end_date: "2024-10-28",
        duration: 0,
        roomId: 16,
        minStay: 2,
        maxStay: 7
      },
      {
        id: 17,
        text: "Room 17",
        start_date: "2024-08-05",
        end_date: "2024-10-25",
        duration: 0,
        roomId: 17,
        minStay: 3,
        maxStay: 8
      },
      {
        id: 18,
        text: "Room 18",
        start_date: "2024-08-10",
        end_date: "2024-10-31",
        duration: 0,
        roomId: 18,
        minStay: 2,
        maxStay: 6
      },
      {
        id: 19,
        text: "Room 19",
        start_date: "2024-08-15",
        end_date: "2024-10-30",
        duration: 0,
        roomId: 19,
        minStay: 4,
        maxStay: 10
      },
      {
        id: 20,
        text: "Room 20",
        start_date: "2024-08-20",
        end_date: "2024-10-28",
        duration: 0,
        roomId: 20,
        minStay: 1,
        maxStay: 5
      },
      // {
      //   id: 2,
      //   text: "Room 2",
      //   start_date: "2024-08-01",
      //   end_date: "2024-10-31",
      //   duration: 0,
      //   roomId: 2,
      //   minStay: 2,
      //   maxStay: 6
      // },
      // {
      //   id: 4,
      //   text: "Room 04",
      //   start_date: "2024-08-05",
      //   end_date: "2024-10-28",
      //   duration: 0,
      //   roomId: 4,
      //   minStay: 3,
      //   maxStay: 7
      // },
      // {
      //   id: 6,
      //   text: "Room 06",
      //   start_date: "2024-08-10",
      //   end_date: "2024-10-25",
      //   duration: 0,
      //   roomId: 6,
      //   minStay: 1,
      //   maxStay: 4
      // },
      // {
      //   id: 8,
      //   text: "Room 08",
      //   start_date: "2024-08-20",
      //   end_date: "2024-10-30",
      //   duration: 0,
      //   roomId: 8,
      //   minStay: 2,
      //   maxStay: 5
      // },
      // {
      //   id: 10,
      //   text: "Room 10",
      //   start_date: "2024-08-20",
      //   end_date: "2024-10-30",
      //   duration: 0,
      //   roomId: 10,
      //   minStay: 3,
      //   maxStay: 8
      // },
      // {
      //   id: 11,
      //   text: "Room 11",
      //   start_date: "2024-08-01",
      //   end_date: "2024-10-28",
      //   duration: 0,
      //   roomId: 10,
      //   minStay: 4,
      //   maxStay: 9
      // },
      // {
      //   id: 13,
      //   text: "Room 13",
      //   start_date: "2024-08-05",
      //   end_date: "2024-10-25",
      //   duration: 0,
      //   roomId: 13,
      //   minStay: 2,
      //   maxStay: 6
      // },
      // {
      //   id: 15,
      //   text: "Room 15",
      //   start_date: "2024-08-10",
      //   end_date: "2024-10-31",
      //   duration: 0,
      //   roomId: 15,
      //   minStay: 3,
      //   maxStay: 7
      // },
      // {
      //   id: 17,
      //   text: "Room 17",
      //   start_date: "2024-08-15",
      //   end_date: "2024-10-30",
      //   duration: 0,
      //   roomId: 10,
      //   minStay: 1,
      //   maxStay: 5
      // },
      // {
      //   id: 19,
      //   text: "Room 19",
      //   start_date: "2024-08-20",
      //   end_date: "2024-10-28",
      //   duration: 0,
      //   roomId: 19,
      //   minStay: 2,
      //   maxStay: 7
      // },
    ];

    // Compute duration based on start_date and end_date
    data.forEach(task => {
      const start = new Date(task.start_date);
      const end = new Date(task.end_date);
      const duration = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
      task.duration = duration;
    });

    // Parse data
    (window as any).gantt.parse({ data });

    // Optionally, you may need to adjust additional settings or events
  }
}
