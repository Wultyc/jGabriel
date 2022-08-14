---
title: "Settings file"
date: 2022-07-31T00:00:00Z
hero: projects/airport-simulator/hero.png
banner: no_image.jpg
level: 1
order: 11
home: false
draft: true
---

The settings file is a JSON file the application will read to adjust the simulation. From it all paraments relevant for the simulation are configurable

```json
{
  "Simulation": {
    "ScheduleEvents": {
      "MaxArrivals": 10,
      "InitialEvents": {
        "Quantity": 1,
        "MaxInitialEventTime": 100
      },
      "DuringSimulation": {
        "ArriveRate": {
          "Rate": 10,
          "TimeUnits": 100
        }
      }
    },
    "Passengers": {
      "MinimumInterval": 0,
      "MaximumInterval": 900,
      "Probabilities": {
        "CheckInOnSite": 20,
        "ValidatePassport": 30
      }
    },
    "Servers": {
      "CheckInAttendant": {
        "Count": 1
      },
      "TicketValidator": {
        "Count": 1
      },
      "MetalDetector": {
        "Count": 1
      },
      "PassportValidationAttendant": {
        "Count": 1
      },
      "AirplaneEntranceAttendant": {
        "Count": 1
      }
    },
    "Events": {
      "CheckIn": {
        "Travel": {
          "NextEventMinimumInterval": "30",
          "NextEventMaximumInterval": "120"
        },
        "TimeToFinish": {
          "NextEventMinimumInterval": "30",
          "NextEventMaximumInterval": "120"
        }
      },
      "TicketValidation": {
        "Travel": {
          "NextEventMinimumInterval": "30",
          "NextEventMaximumInterval": "120"
        },
        "TimeToFinish": {
          "NextEventMinimumInterval": "30",
          "NextEventMaximumInterval": "120"
        }
      },
      "MetalDetector": {
        "Travel": {
          "NextEventMinimumInterval": "30",
          "NextEventMaximumInterval": "120"
        },
        "TimeToFinish": {
          "NextEventMinimumInterval": "30",
          "NextEventMaximumInterval": "120"
        }
      },
      "PassportValidation": {
        "Travel": {
          "NextEventMinimumInterval": "30",
          "NextEventMaximumInterval": "120"
        },
        "TimeToFinish": {
          "NextEventMinimumInterval": "30",
          "NextEventMaximumInterval": "120"
        }
      },
      "PlaneEntrance": {
        "Travel": {
          "NextEventMinimumInterval": "30",
          "NextEventMaximumInterval": "120"
        },
        "TimeToFinish": {
          "NextEventMinimumInterval": "30",
          "NextEventMaximumInterval": "120"
        }
      }
    },
    "RandomSeed": "1852",
    "Loop": {
      "CountLimit": 999999,
      "TimeLimit": 999999
    }
  },
  "DataVisualizer": {
    "OnScreenReport": {
      "Enable": true,
      "SeparationLineChar": "=",
      "SeparationLineLength": 80,
      "InnerLineIndentation": "    "
    },
    "OnFileReport": {
      "Enable": true,
      "FilePath": "",
      "CSVSeparator": ";",
      "CSVLineBreak": "\r\n "
    }
  }
}
```

