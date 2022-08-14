---
title: "Outputs"
date: 2022-07-31T00:00:00Z
hero: projects/airport-simulator/hero.png
banner: no_image.jpg
level: 1
order: 12
home: false
draft: true
---
The application had two types of outputs: console and csv and both were controlled with the settings file.

## CSV output
The CSV file is created by default on user's desktop and contained the exact same information of the console report, but in an easier way to process the data.

## Console output
On the console the output if formed by the event trigger log and then the simulation report
```
Starting Engine
Starting Simulation Loop
Loop iteration #1
  Handling Event ARRIVE_EVENT for Temporary Entity Passenger #2 at Time Instant 21, is doing on site check-in: False has to validate passport: False
Loop iteration #2
  Handling Event TICKET_VALIDATION_TRAVEL_EVENT for Temporary Entity Passenger #2 scheduled for execution at 22 at Time Instant 22
Loop iteration #3
  Handling Event ARRIVE_EVENT for Temporary Entity Passenger #1 at Time Instant 25, is doing on site check-in: False has to validate passport: True
Loop iteration #4
  Handling Event TICKET_VALIDATION_TRAVEL_EVENT for Temporary Entity Passenger #1 scheduled for execution at 26 at Time Instant 26
Loop iteration #5
  Handling Event ARRIVE_EVENT for Temporary Entity Passenger #3 at Time Instant 43, is doing on site check-in: False has to validate passport: True
Loop iteration #6
  Handling Event TICKET_VALIDATION_TRAVEL_EVENT for Temporary Entity Passenger #3 scheduled for execution at 44 at Time Instant 44
Loop iteration #7
  Handling Event TICKET_VALIDATION_START_EVENT for Temporary Entity Passenger #1 scheduled for execution at 87 at Time Instant 87
Loop iteration #8
  Handling Event ARRIVE_EVENT for Temporary Entity Passenger #4 at Time Instant 90, is doing on site check-in: False has to validate passport: False
Loop iteration #9
  Handling Event TICKET_VALIDATION_TRAVEL_EVENT for Temporary Entity Passenger #4 scheduled for execution at 91 at Time Instant 91
Loop iteration #10
  Handling Event ARRIVE_EVENT for Temporary Entity Passenger #5 at Time Instant 93, is doing on site check-in: True has to validate passport: True
  Handling Event ARRIVE_EVENT for Temporary Entity Passenger #6 at Time Instant 93, is doing on site check-in: False has to validate passport: False
Loop iteration #11
  Handling Event CHECK_IN_TRAVEL_EVENT for Temporary Entity Passenger #5 scheduled for execution at 94 at Time Instant 94
  Handling Event TICKET_VALIDATION_TRAVEL_EVENT for Temporary Entity Passenger #6 scheduled for execution at 94 at Time Instant 94
Loop iteration #12
  Handling Event ARRIVE_EVENT for Temporary Entity Passenger #7 at Time Instant 97, is doing on site check-in: False has to validate passport: False
Loop iteration #13
  Handling Event ARRIVE_EVENT for Temporary Entity Passenger #8 at Time Instant 98, is doing on site check-in: False has to validate passport: False
  Handling Event ARRIVE_EVENT for Temporary Entity Passenger #9 at Time Instant 98, is doing on site check-in: False has to validate passport: True
  Handling Event ARRIVE_EVENT for Temporary Entity Passenger #10 at Time Instant 98, is doing on site check-in: False has to validate passport: False
  Handling Event TICKET_VALIDATION_TRAVEL_EVENT for Temporary Entity Passenger #7 scheduled for execution at 98 at Time Instant 98
Loop iteration #14
  Handling Event TICKET_VALIDATION_TRAVEL_EVENT for Temporary Entity Passenger #8 scheduled for execution at 99 at Time Instant 99
  Handling Event TICKET_VALIDATION_TRAVEL_EVENT for Temporary Entity Passenger #9 scheduled for execution at 99 at Time Instant 99
  Handling Event TICKET_VALIDATION_TRAVEL_EVENT for Temporary Entity Passenger #10 scheduled for execution at 99 at Time Instant 99
Loop iteration #15
Loop iteration #16
Loop iteration #17
Loop iteration #18
Loop iteration #19
Loop iteration #20
Loop iteration #21
  Handling Event CHECK_IN_START_EVENT for Temporary Entity Passenger #5 scheduled for execution at 181 at Time Instant 181
Loop iteration #22
Loop iteration #23
  Handling Event TICKET_VALIDATION_FINISH_EVENT for Temporary Entity Passenger #1 scheduled for execution at 205 at Time Instant 205
  Handling Event TICKET_VALIDATION_START_EVENT for Temporary Entity Passenger #2 scheduled for execution at 116 at Time Instant 205
Loop iteration #24
  Handling Event METAL_DETECTOR_TRAVEL_EVENT for Temporary Entity Passenger #1 scheduled for execution at 206 at Time Instant 206
Loop iteration #25
Loop iteration #26
  Handling Event CHECK_IN_FINISH_EVENT for Temporary Entity Passenger #5 scheduled for execution at 230 at Time Instant 230
Loop iteration #27
  Handling Event TICKET_VALIDATION_TRAVEL_EVENT for Temporary Entity Passenger #5 scheduled for execution at 231 at Time Instant 231
Loop iteration #28
  Handling Event METAL_DETECTOR_START_EVENT for Temporary Entity Passenger #1 scheduled for execution at 237 at Time Instant 237
Loop iteration #29
Loop iteration #30
  Handling Event TICKET_VALIDATION_FINISH_EVENT for Temporary Entity Passenger #2 scheduled for execution at 324 at Time Instant 324
  Handling Event TICKET_VALIDATION_START_EVENT for Temporary Entity Passenger #3 scheduled for execution at 145 at Time Instant 324
Loop iteration #31
  Handling Event METAL_DETECTOR_TRAVEL_EVENT for Temporary Entity Passenger #2 scheduled for execution at 325 at Time Instant 325
Loop iteration #32
  Handling Event METAL_DETECTOR_FINISH_EVENT for Temporary Entity Passenger #1 scheduled for execution at 330 at Time Instant 330
Loop iteration #33
  Handling Event PASSPORT_VALIDATION_TRAVEL_EVENT for Temporary Entity Passenger #1 scheduled for execution at 331 at Time Instant 331
Loop iteration #34
  Handling Event PASSPORT_VALIDATION_START_EVENT for Temporary Entity Passenger #1 scheduled for execution at 369 at Time Instant 369
Loop iteration #35
  Handling Event TICKET_VALIDATION_FINISH_EVENT for Temporary Entity Passenger #3 scheduled for execution at 373 at Time Instant 373
  Handling Event TICKET_VALIDATION_START_EVENT for Temporary Entity Passenger #7 scheduled for execution at 149 at Time Instant 373
  Handling Event METAL_DETECTOR_START_EVENT for Temporary Entity Passenger #2 scheduled for execution at 373 at Time Instant 373
Loop iteration #36
  Handling Event METAL_DETECTOR_TRAVEL_EVENT for Temporary Entity Passenger #3 scheduled for execution at 374 at Time Instant 374
Loop iteration #37
Loop iteration #38
  Handling Event METAL_DETECTOR_FINISH_EVENT for Temporary Entity Passenger #2 scheduled for execution at 428 at Time Instant 428
  Handling Event METAL_DETECTOR_START_EVENT for Temporary Entity Passenger #3 scheduled for execution at 406 at Time Instant 428
Loop iteration #39
  Handling Event PLANE_ENTRANCE_TRAVEL_EVENT for Temporary Entity Passenger #2 scheduled for execution at 429 at Time Instant 429
Loop iteration #40
  Handling Event PASSPORT_VALIDATION_FINISH_EVENT for Temporary Entity Passenger #1 scheduled for execution at 453 at Time Instant 453
Loop iteration #41
  Handling Event PLANE_ENTRANCE_TRAVEL_EVENT for Temporary Entity Passenger #1 scheduled for execution at 454 at Time Instant 454
Loop iteration #42
  Handling Event TICKET_VALIDATION_FINISH_EVENT for Temporary Entity Passenger #7 scheduled for execution at 484 at Time Instant 484
  Handling Event TICKET_VALIDATION_START_EVENT for Temporary Entity Passenger #4 scheduled for execution at 150 at Time Instant 484
Loop iteration #43
  Handling Event METAL_DETECTOR_TRAVEL_EVENT for Temporary Entity Passenger #7 scheduled for execution at 485 at Time Instant 485
Loop iteration #44
  Handling Event PLANE_ENTRANCE_START_EVENT for Temporary Entity Passenger #1 scheduled for execution at 486 at Time Instant 486
Loop iteration #45
Loop iteration #46
  Handling Event METAL_DETECTOR_FINISH_EVENT for Temporary Entity Passenger #3 scheduled for execution at 495 at Time Instant 495
Loop iteration #47
  Handling Event PASSPORT_VALIDATION_TRAVEL_EVENT for Temporary Entity Passenger #3 scheduled for execution at 496 at Time Instant 496
Loop iteration #48
  Handling Event TICKET_VALIDATION_FINISH_EVENT for Temporary Entity Passenger #4 scheduled for execution at 525 at Time Instant 525
  Handling Event TICKET_VALIDATION_START_EVENT for Temporary Entity Passenger #6 scheduled for execution at 157 at Time Instant 525
Loop iteration #49
  Handling Event METAL_DETECTOR_TRAVEL_EVENT for Temporary Entity Passenger #4 scheduled for execution at 526 at Time Instant 526
Loop iteration #50
  Handling Event PLANE_ENTRANCE_FINISH_EVENT for Temporary Entity Passenger #1 scheduled for execution at 561 at Time Instant 561
  Handling Event METAL_DETECTOR_START_EVENT for Temporary Entity Passenger #7 scheduled for execution at 561 at Time Instant 561
  Handling Event PLANE_ENTRANCE_START_EVENT for Temporary Entity Passenger #2 scheduled for execution at 487 at Time Instant 561
Loop iteration #51
  Handling Event PASSPORT_VALIDATION_START_EVENT for Temporary Entity Passenger #3 scheduled for execution at 573 at Time Instant 573
Loop iteration #52
Loop iteration #53
  Handling Event TICKET_VALIDATION_FINISH_EVENT for Temporary Entity Passenger #6 scheduled for execution at 580 at Time Instant 580
  Handling Event TICKET_VALIDATION_START_EVENT for Temporary Entity Passenger #9 scheduled for execution at 166 at Time Instant 580
Loop iteration #54
  Handling Event METAL_DETECTOR_TRAVEL_EVENT for Temporary Entity Passenger #6 scheduled for execution at 581 at Time Instant 581
Loop iteration #55
  Handling Event PASSPORT_VALIDATION_FINISH_EVENT for Temporary Entity Passenger #3 scheduled for execution at 634 at Time Instant 634
Loop iteration #56
  Handling Event PLANE_ENTRANCE_TRAVEL_EVENT for Temporary Entity Passenger #3 scheduled for execution at 635 at Time Instant 635
Loop iteration #57
Loop iteration #58
  Handling Event METAL_DETECTOR_FINISH_EVENT for Temporary Entity Passenger #7 scheduled for execution at 657 at Time Instant 657
  Handling Event METAL_DETECTOR_START_EVENT for Temporary Entity Passenger #4 scheduled for execution at 578 at Time Instant 657
Loop iteration #59
  Handling Event PLANE_ENTRANCE_TRAVEL_EVENT for Temporary Entity Passenger #7 scheduled for execution at 658 at Time Instant 658
Loop iteration #60
  Handling Event PLANE_ENTRANCE_FINISH_EVENT for Temporary Entity Passenger #2 scheduled for execution at 667 at Time Instant 667
Loop iteration #61
  Handling Event TICKET_VALIDATION_FINISH_EVENT for Temporary Entity Passenger #9 scheduled for execution at 676 at Time Instant 676
  Handling Event TICKET_VALIDATION_START_EVENT for Temporary Entity Passenger #8 scheduled for execution at 202 at Time Instant 676
Loop iteration #62
  Handling Event METAL_DETECTOR_TRAVEL_EVENT for Temporary Entity Passenger #9 scheduled for execution at 677 at Time Instant 677
Loop iteration #63
  Handling Event METAL_DETECTOR_FINISH_EVENT for Temporary Entity Passenger #4 scheduled for execution at 693 at Time Instant 693
  Handling Event METAL_DETECTOR_START_EVENT for Temporary Entity Passenger #6 scheduled for execution at 649 at Time Instant 693
Loop iteration #64
  Handling Event PLANE_ENTRANCE_TRAVEL_EVENT for Temporary Entity Passenger #4 scheduled for execution at 694 at Time Instant 694
Loop iteration #65
  Handling Event PLANE_ENTRANCE_START_EVENT for Temporary Entity Passenger #3 scheduled for execution at 707 at Time Instant 707
Loop iteration #66
  Handling Event PLANE_ENTRANCE_FINISH_EVENT for Temporary Entity Passenger #3 scheduled for execution at 738 at Time Instant 738
Loop iteration #67
Loop iteration #68
  Handling Event TICKET_VALIDATION_FINISH_EVENT for Temporary Entity Passenger #8 scheduled for execution at 757 at Time Instant 757
  Handling Event TICKET_VALIDATION_START_EVENT for Temporary Entity Passenger #10 scheduled for execution at 209 at Time Instant 757
Loop iteration #69
  Handling Event METAL_DETECTOR_TRAVEL_EVENT for Temporary Entity Passenger #8 scheduled for execution at 758 at Time Instant 758
Loop iteration #70
  Handling Event METAL_DETECTOR_FINISH_EVENT for Temporary Entity Passenger #6 scheduled for execution at 774 at Time Instant 774
  Handling Event METAL_DETECTOR_START_EVENT for Temporary Entity Passenger #9 scheduled for execution at 744 at Time Instant 774
Loop iteration #71
  Handling Event PLANE_ENTRANCE_TRAVEL_EVENT for Temporary Entity Passenger #6 scheduled for execution at 775 at Time Instant 775
Loop iteration #72
  Handling Event PLANE_ENTRANCE_START_EVENT for Temporary Entity Passenger #7 scheduled for execution at 777 at Time Instant 777
Loop iteration #73
  Handling Event TICKET_VALIDATION_FINISH_EVENT for Temporary Entity Passenger #10 scheduled for execution at 791 at Time Instant 791
  Handling Event TICKET_VALIDATION_START_EVENT for Temporary Entity Passenger #5 scheduled for execution at 279 at Time Instant 791
Loop iteration #74
  Handling Event METAL_DETECTOR_TRAVEL_EVENT for Temporary Entity Passenger #10 scheduled for execution at 792 at Time Instant 792
Loop iteration #75
Loop iteration #76
Loop iteration #77
  Handling Event METAL_DETECTOR_FINISH_EVENT for Temporary Entity Passenger #9 scheduled for execution at 828 at Time Instant 828
  Handling Event METAL_DETECTOR_START_EVENT for Temporary Entity Passenger #8 scheduled for execution at 809 at Time Instant 828
Loop iteration #78
  Handling Event PASSPORT_VALIDATION_TRAVEL_EVENT for Temporary Entity Passenger #9 scheduled for execution at 829 at Time Instant 829
Loop iteration #79
Loop iteration #80
  Handling Event PLANE_ENTRANCE_FINISH_EVENT for Temporary Entity Passenger #7 scheduled for execution at 866 at Time Instant 866
  Handling Event PLANE_ENTRANCE_START_EVENT for Temporary Entity Passenger #4 scheduled for execution at 795 at Time Instant 866
Loop iteration #81
Loop iteration #82
  Handling Event TICKET_VALIDATION_FINISH_EVENT for Temporary Entity Passenger #5 scheduled for execution at 892 at Time Instant 892
Loop iteration #83
  Handling Event METAL_DETECTOR_TRAVEL_EVENT for Temporary Entity Passenger #5 scheduled for execution at 893 at Time Instant 893
Loop iteration #84
  Handling Event METAL_DETECTOR_FINISH_EVENT for Temporary Entity Passenger #8 scheduled for execution at 900 at Time Instant 900
  Handling Event METAL_DETECTOR_START_EVENT for Temporary Entity Passenger #10 scheduled for execution at 867 at Time Instant 900
Loop iteration #85
  Handling Event PLANE_ENTRANCE_TRAVEL_EVENT for Temporary Entity Passenger #8 scheduled for execution at 901 at Time Instant 901
Loop iteration #86
  Handling Event PASSPORT_VALIDATION_START_EVENT for Temporary Entity Passenger #9 scheduled for execution at 903 at Time Instant 903
Loop iteration #87
  Handling Event PLANE_ENTRANCE_FINISH_EVENT for Temporary Entity Passenger #4 scheduled for execution at 922 at Time Instant 922
  Handling Event PLANE_ENTRANCE_START_EVENT for Temporary Entity Passenger #6 scheduled for execution at 863 at Time Instant 922
Loop iteration #88
  Handling Event METAL_DETECTOR_FINISH_EVENT for Temporary Entity Passenger #10 scheduled for execution at 958 at Time Instant 958
Loop iteration #89
  Handling Event PLANE_ENTRANCE_TRAVEL_EVENT for Temporary Entity Passenger #10 scheduled for execution at 959 at Time Instant 959
Loop iteration #90
  Handling Event METAL_DETECTOR_START_EVENT for Temporary Entity Passenger #5 scheduled for execution at 962 at Time Instant 962
Loop iteration #91
Loop iteration #92
  Handling Event PLANE_ENTRANCE_FINISH_EVENT for Temporary Entity Passenger #6 scheduled for execution at 979 at Time Instant 979
  Handling Event PLANE_ENTRANCE_START_EVENT for Temporary Entity Passenger #8 scheduled for execution at 964 at Time Instant 979
Loop iteration #93
  Handling Event PASSPORT_VALIDATION_FINISH_EVENT for Temporary Entity Passenger #9 scheduled for execution at 992 at Time Instant 992
Loop iteration #94
  Handling Event PLANE_ENTRANCE_TRAVEL_EVENT for Temporary Entity Passenger #9 scheduled for execution at 993 at Time Instant 993
Loop iteration #95
Loop iteration #96
Loop iteration #97
  Handling Event METAL_DETECTOR_FINISH_EVENT for Temporary Entity Passenger #5 scheduled for execution at 1068 at Time Instant 1068
Loop iteration #98
  Handling Event PASSPORT_VALIDATION_TRAVEL_EVENT for Temporary Entity Passenger #5 scheduled for execution at 1069 at Time Instant 1069
Loop iteration #99
  Handling Event PLANE_ENTRANCE_FINISH_EVENT for Temporary Entity Passenger #8 scheduled for execution at 1074 at Time Instant 1074
  Handling Event PLANE_ENTRANCE_START_EVENT for Temporary Entity Passenger #10 scheduled for execution at 1034 at Time Instant 1074
Loop iteration #100
  Handling Event PASSPORT_VALIDATION_START_EVENT for Temporary Entity Passenger #5 scheduled for execution at 1111 at Time Instant 1111
Loop iteration #101
  Handling Event PLANE_ENTRANCE_FINISH_EVENT for Temporary Entity Passenger #10 scheduled for execution at 1162 at Time Instant 1162
  Handling Event PLANE_ENTRANCE_START_EVENT for Temporary Entity Passenger #9 scheduled for execution at 1048 at Time Instant 1162
Loop iteration #102
  Handling Event PASSPORT_VALIDATION_FINISH_EVENT for Temporary Entity Passenger #5 scheduled for execution at 1183 at Time Instant 1183
Loop iteration #103
  Handling Event PLANE_ENTRANCE_TRAVEL_EVENT for Temporary Entity Passenger #5 scheduled for execution at 1184 at Time Instant 1184
Loop iteration #104
  Handling Event PLANE_ENTRANCE_FINISH_EVENT for Temporary Entity Passenger #9 scheduled for execution at 1204 at Time Instant 1204
Loop iteration #105
  Handling Event PLANE_ENTRANCE_START_EVENT for Temporary Entity Passenger #5 scheduled for execution at 1274 at Time Instant 1274
Loop iteration #106
  Handling Event PLANE_ENTRANCE_FINISH_EVENT for Temporary Entity Passenger #5 scheduled for execution at 1345 at Time Instant 1345
Loop iteration #107
No more events to handle
Stoping Simulation Loop
Stoping Engine
================================================================================
Snapshot for time 21
Time since last snapshot 22
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 0
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 0
================================================================================
Snapshot for time 22
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 0
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 0
================================================================================
Snapshot for time 25
Time since last snapshot 3
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 0
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 0
================================================================================
Snapshot for time 26
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 0
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 0
================================================================================
Snapshot for time 43
Time since last snapshot 17
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 0
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 0
================================================================================
Snapshot for time 44
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 0
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 0
================================================================================
Snapshot for time 87
Time since last snapshot 43
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 0
================================================================================
Snapshot for time 90
Time since last snapshot 3
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 0
================================================================================
Snapshot for time 91
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 0
================================================================================
Snapshot for time 93
Time since last snapshot 2
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 0
================================================================================
Snapshot for time 94
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 0
================================================================================
Snapshot for time 97
Time since last snapshot 3
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 0
================================================================================
Snapshot for time 98
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 0
================================================================================
Snapshot for time 99
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 0
================================================================================
Snapshot for time 116
Time since last snapshot 17
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 1
================================================================================
Snapshot for time 145
Time since last snapshot 29
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 2
================================================================================
Snapshot for time 149
Time since last snapshot 4
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 3
================================================================================
Snapshot for time 150
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 4
================================================================================
Snapshot for time 157
Time since last snapshot 7
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 5
================================================================================
Snapshot for time 166
Time since last snapshot 9
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 6
================================================================================
Snapshot for time 181
Time since last snapshot 15
    Checkin Attendant Ocupation Rate: 100
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 6
================================================================================
Snapshot for time 202
Time since last snapshot 21
    Checkin Attendant Ocupation Rate: 100
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 0
    Avg Time In Check In: 0
    Avg Time In Check In: 0
    Avg Time Total: 0
    Total people in queue: 7
================================================================================
Snapshot for time 205
Time since last snapshot 3
    Checkin Attendant Ocupation Rate: 100
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 89
    Avg Time In Check In: 0
    Avg Time In Check In: 118
    Avg Time Total: 0
    Total people in queue: 6
================================================================================
Snapshot for time 206
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 100
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 89
    Avg Time In Check In: 0
    Avg Time In Check In: 118
    Avg Time Total: 0
    Total people in queue: 6
================================================================================
Snapshot for time 209
Time since last snapshot 3
    Checkin Attendant Ocupation Rate: 100
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 0
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 89
    Avg Time In Check In: 0
    Avg Time In Check In: 118
    Avg Time Total: 0
    Total people in queue: 7
================================================================================
Snapshot for time 230
Time since last snapshot 21
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 89
    Avg Time In Check In: 0
    Avg Time In Check In: 118
    Avg Time Total: 0
    Total people in queue: 7
================================================================================
Snapshot for time 231
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 89
    Avg Time In Check In: 0
    Avg Time In Check In: 118
    Avg Time Total: 0
    Total people in queue: 7
================================================================================
Snapshot for time 237
Time since last snapshot 6
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 89
    Avg Time In Check In: 0
    Avg Time In Check In: 118
    Avg Time Total: 0
    Total people in queue: 7
================================================================================
Snapshot for time 279
Time since last snapshot 42
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 89
    Avg Time In Check In: 0
    Avg Time In Check In: 118
    Avg Time Total: 0
    Total people in queue: 8
================================================================================
Snapshot for time 324
Time since last snapshot 45
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 134
    Avg Time In Check In: 0
    Avg Time In Check In: 118
    Avg Time Total: 0
    Total people in queue: 7
================================================================================
Snapshot for time 325
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 0
    Avg Time In Queue: 134
    Avg Time In Check In: 0
    Avg Time In Check In: 118
    Avg Time Total: 0
    Total people in queue: 7
================================================================================
Snapshot for time 330
Time since last snapshot 5
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 93
    Avg Time In Queue: 134
    Avg Time In Check In: 0
    Avg Time In Check In: 118
    Avg Time Total: 0
    Total people in queue: 7
================================================================================
Snapshot for time 331
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 93
    Avg Time In Queue: 134
    Avg Time In Check In: 0
    Avg Time In Check In: 118
    Avg Time Total: 0
    Total people in queue: 7
================================================================================
Snapshot for time 369
Time since last snapshot 38
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 93
    Avg Time In Queue: 134
    Avg Time In Check In: 0
    Avg Time In Check In: 118
    Avg Time Total: 0
    Total people in queue: 7
================================================================================
Snapshot for time 373
Time since last snapshot 4
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 93
    Avg Time In Queue: 164
    Avg Time In Check In: 0
    Avg Time In Check In: 95
    Avg Time Total: 0
    Total people in queue: 6
================================================================================
Snapshot for time 374
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 93
    Avg Time In Queue: 164
    Avg Time In Check In: 0
    Avg Time In Check In: 95
    Avg Time Total: 0
    Total people in queue: 6
================================================================================
Snapshot for time 406
Time since last snapshot 32
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 93
    Avg Time In Queue: 164
    Avg Time In Check In: 0
    Avg Time In Check In: 95
    Avg Time Total: 0
    Total people in queue: 7
================================================================================
Snapshot for time 428
Time since last snapshot 22
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 74
    Avg Time In Queue: 128
    Avg Time In Check In: 0
    Avg Time In Check In: 95
    Avg Time Total: 0
    Total people in queue: 6
================================================================================
Snapshot for time 429
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 74
    Avg Time In Queue: 128
    Avg Time In Check In: 0
    Avg Time In Check In: 95
    Avg Time Total: 0
    Total people in queue: 6
================================================================================
Snapshot for time 453
Time since last snapshot 24
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 74
    Avg Time In Queue: 128
    Avg Time In Check In: 84
    Avg Time In Check In: 95
    Avg Time Total: 0
    Total people in queue: 6
================================================================================
Snapshot for time 454
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 74
    Avg Time In Queue: 128
    Avg Time In Check In: 84
    Avg Time In Check In: 95
    Avg Time Total: 0
    Total people in queue: 6
================================================================================
Snapshot for time 484
Time since last snapshot 30
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 74
    Avg Time In Queue: 169
    Avg Time In Check In: 84
    Avg Time In Check In: 99
    Avg Time Total: 0
    Total people in queue: 5
================================================================================
Snapshot for time 485
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 74
    Avg Time In Queue: 169
    Avg Time In Check In: 84
    Avg Time In Check In: 99
    Avg Time Total: 0
    Total people in queue: 5
================================================================================
Snapshot for time 486
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 74
    Avg Time In Queue: 169
    Avg Time In Check In: 84
    Avg Time In Check In: 99
    Avg Time Total: 0
    Total people in queue: 5
================================================================================
Snapshot for time 487
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 74
    Avg Time In Queue: 169
    Avg Time In Check In: 84
    Avg Time In Check In: 99
    Avg Time Total: 0
    Total people in queue: 6
================================================================================
Snapshot for time 495
Time since last snapshot 8
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 169
    Avg Time In Check In: 84
    Avg Time In Check In: 99
    Avg Time Total: 0
    Total people in queue: 6
================================================================================
Snapshot for time 496
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 169
    Avg Time In Check In: 84
    Avg Time In Check In: 99
    Avg Time Total: 0
    Total people in queue: 6
================================================================================
Snapshot for time 525
Time since last snapshot 29
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 202
    Avg Time In Check In: 84
    Avg Time In Check In: 87
    Avg Time Total: 0
    Total people in queue: 5
================================================================================
Snapshot for time 526
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 202
    Avg Time In Check In: 84
    Avg Time In Check In: 87
    Avg Time Total: 0
    Total people in queue: 5
================================================================================
Snapshot for time 561
Time since last snapshot 35
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 184
    Avg Time In Check In: 84
    Avg Time In Check In: 87
    Avg Time Total: 536
    Total people in queue: 4
================================================================================
Snapshot for time 573
Time since last snapshot 12
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 80
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 184
    Avg Time In Check In: 84
    Avg Time In Check In: 87
    Avg Time Total: 536
    Total people in queue: 4
================================================================================
Snapshot for time 578
Time since last snapshot 5
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 80
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 184
    Avg Time In Check In: 84
    Avg Time In Check In: 87
    Avg Time Total: 536
    Total people in queue: 5
================================================================================
Snapshot for time 580
Time since last snapshot 2
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 80
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 213
    Avg Time In Check In: 84
    Avg Time In Check In: 82
    Avg Time Total: 536
    Total people in queue: 4
================================================================================
Snapshot for time 581
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 80
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 213
    Avg Time In Check In: 84
    Avg Time In Check In: 82
    Avg Time Total: 536
    Total people in queue: 4
================================================================================
Snapshot for time 634
Time since last snapshot 53
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 213
    Avg Time In Check In: 72
    Avg Time In Check In: 82
    Avg Time Total: 536
    Total people in queue: 4
================================================================================
Snapshot for time 635
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 213
    Avg Time In Check In: 72
    Avg Time In Check In: 82
    Avg Time Total: 536
    Total people in queue: 4
================================================================================
Snapshot for time 649
Time since last snapshot 14
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 213
    Avg Time In Check In: 72
    Avg Time In Check In: 82
    Avg Time Total: 536
    Total people in queue: 5
================================================================================
Snapshot for time 657
Time since last snapshot 8
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 77
    Avg Time In Queue: 198
    Avg Time In Check In: 72
    Avg Time In Check In: 82
    Avg Time Total: 536
    Total people in queue: 4
================================================================================
Snapshot for time 658
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 0
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 77
    Avg Time In Queue: 198
    Avg Time In Check In: 72
    Avg Time In Check In: 82
    Avg Time Total: 536
    Total people in queue: 4
================================================================================
Snapshot for time 667
Time since last snapshot 9
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -55
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 77
    Avg Time In Queue: 198
    Avg Time In Check In: 72
    Avg Time In Check In: 82
    Avg Time Total: 591
    Total people in queue: 4
================================================================================
Snapshot for time 676
Time since last snapshot 9
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -55
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 77
    Avg Time In Queue: 225
    Avg Time In Check In: 72
    Avg Time In Check In: 84
    Avg Time Total: 591
    Total people in queue: 3
================================================================================
Snapshot for time 677
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -55
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 77
    Avg Time In Queue: 225
    Avg Time In Check In: 72
    Avg Time In Check In: 84
    Avg Time Total: 591
    Total people in queue: 3
================================================================================
Snapshot for time 693
Time since last snapshot 16
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -55
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 69
    Avg Time In Queue: 209
    Avg Time In Check In: 72
    Avg Time In Check In: 84
    Avg Time Total: 591
    Total people in queue: 2
================================================================================
Snapshot for time 694
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -55
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 69
    Avg Time In Queue: 209
    Avg Time In Check In: 72
    Avg Time In Check In: 84
    Avg Time Total: 591
    Total people in queue: 2
================================================================================
Snapshot for time 707
Time since last snapshot 13
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -55
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 69
    Avg Time In Queue: 209
    Avg Time In Check In: 72
    Avg Time In Check In: 84
    Avg Time Total: 591
    Total people in queue: 2
================================================================================
Snapshot for time 738
Time since last snapshot 31
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -9,5
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 69
    Avg Time In Queue: 209
    Avg Time In Check In: 72
    Avg Time In Check In: 84
    Avg Time Total: 625
    Total people in queue: 2
================================================================================
Snapshot for time 744
Time since last snapshot 6
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -9,5
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 69
    Avg Time In Queue: 209
    Avg Time In Check In: 72
    Avg Time In Check In: 84
    Avg Time Total: 625
    Total people in queue: 3
================================================================================
Snapshot for time 757
Time since last snapshot 13
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -9,5
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 69
    Avg Time In Queue: 237
    Avg Time In Check In: 72
    Avg Time In Check In: 83
    Avg Time Total: 625
    Total people in queue: 2
================================================================================
Snapshot for time 758
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -9,5
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 69
    Avg Time In Queue: 237
    Avg Time In Check In: 72
    Avg Time In Check In: 83
    Avg Time Total: 625
    Total people in queue: 2
================================================================================
Snapshot for time 774
Time since last snapshot 16
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -9,5
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 221
    Avg Time In Check In: 72
    Avg Time In Check In: 83
    Avg Time Total: 625
    Total people in queue: 1
================================================================================
Snapshot for time 775
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -9,5
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 221
    Avg Time In Check In: 72
    Avg Time In Check In: 83
    Avg Time Total: 625
    Total people in queue: 1
================================================================================
Snapshot for time 777
Time since last snapshot 2
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -9,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 221
    Avg Time In Check In: 72
    Avg Time In Check In: 83
    Avg Time Total: 625
    Total people in queue: 1
================================================================================
Snapshot for time 791
Time since last snapshot 14
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -9,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 242
    Avg Time In Check In: 72
    Avg Time In Check In: 78
    Avg Time Total: 625
    Total people in queue: 0
================================================================================
Snapshot for time 792
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -9,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 242
    Avg Time In Check In: 72
    Avg Time In Check In: 78
    Avg Time Total: 625
    Total people in queue: 0
================================================================================
Snapshot for time 795
Time since last snapshot 3
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -9,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 242
    Avg Time In Check In: 72
    Avg Time In Check In: 78
    Avg Time Total: 625
    Total people in queue: 1
================================================================================
Snapshot for time 809
Time since last snapshot 14
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -9,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 242
    Avg Time In Check In: 72
    Avg Time In Check In: 78
    Avg Time Total: 625
    Total people in queue: 2
================================================================================
Snapshot for time 828
Time since last snapshot 19
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -9,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 227
    Avg Time In Check In: 72
    Avg Time In Check In: 78
    Avg Time Total: 625
    Total people in queue: 1
================================================================================
Snapshot for time 829
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -9,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 227
    Avg Time In Check In: 72
    Avg Time In Check In: 78
    Avg Time Total: 625
    Total people in queue: 1
================================================================================
Snapshot for time 863
Time since last snapshot 34
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -9,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 227
    Avg Time In Check In: 72
    Avg Time In Check In: 78
    Avg Time Total: 625
    Total people in queue: 2
================================================================================
Snapshot for time 866
Time since last snapshot 3
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -45,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 217
    Avg Time In Check In: 72
    Avg Time In Check In: 78
    Avg Time Total: 661
    Total people in queue: 1
================================================================================
Snapshot for time 867
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -45,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 100
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 217
    Avg Time In Check In: 72
    Avg Time In Check In: 78
    Avg Time Total: 661
    Total people in queue: 2
================================================================================
Snapshot for time 892
Time since last snapshot 25
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -45,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 217
    Avg Time In Check In: 72
    Avg Time In Check In: 80
    Avg Time Total: 661
    Total people in queue: 2
================================================================================
Snapshot for time 893
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -45,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 217
    Avg Time In Check In: 72
    Avg Time In Check In: 80
    Avg Time Total: 661
    Total people in queue: 2
================================================================================
Snapshot for time 900
Time since last snapshot 7
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -45,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 69
    Avg Time In Queue: 206
    Avg Time In Check In: 72
    Avg Time In Check In: 80
    Avg Time Total: 661
    Total people in queue: 1
================================================================================
Snapshot for time 901
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -45,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 69
    Avg Time In Queue: 206
    Avg Time In Check In: 72
    Avg Time In Check In: 80
    Avg Time Total: 661
    Total people in queue: 1
================================================================================
Snapshot for time 903
Time since last snapshot 2
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: -45,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 69
    Avg Time In Queue: 206
    Avg Time In Check In: 72
    Avg Time In Check In: 80
    Avg Time Total: 661
    Total people in queue: 1
================================================================================
Snapshot for time 922
Time since last snapshot 19
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: -79,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 69
    Avg Time In Queue: 198
    Avg Time In Check In: 72
    Avg Time In Check In: 80
    Avg Time Total: 695
    Total people in queue: 0
================================================================================
Snapshot for time 958
Time since last snapshot 36
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: -79,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 198
    Avg Time In Check In: 72
    Avg Time In Check In: 80
    Avg Time Total: 695
    Total people in queue: 0
================================================================================
Snapshot for time 959
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: -79,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 198
    Avg Time In Check In: 72
    Avg Time In Check In: 80
    Avg Time Total: 695
    Total people in queue: 0
================================================================================
Snapshot for time 962
Time since last snapshot 3
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: -79,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 198
    Avg Time In Check In: 72
    Avg Time In Check In: 80
    Avg Time Total: 695
    Total people in queue: 0
================================================================================
Snapshot for time 964
Time since last snapshot 2
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: -79,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 198
    Avg Time In Check In: 72
    Avg Time In Check In: 80
    Avg Time Total: 695
    Total people in queue: 1
================================================================================
Snapshot for time 979
Time since last snapshot 15
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: -111,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 60
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 188
    Avg Time In Check In: 72
    Avg Time In Check In: 80
    Avg Time Total: 727
    Total people in queue: 0
================================================================================
Snapshot for time 992
Time since last snapshot 13
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -111,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 188
    Avg Time In Check In: 78
    Avg Time In Check In: 80
    Avg Time Total: 727
    Total people in queue: 0
================================================================================
Snapshot for time 993
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -111,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 188
    Avg Time In Check In: 78
    Avg Time In Check In: 80
    Avg Time Total: 727
    Total people in queue: 0
================================================================================
Snapshot for time 1034
Time since last snapshot 41
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -111,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 188
    Avg Time In Check In: 78
    Avg Time In Check In: 80
    Avg Time Total: 727
    Total people in queue: 1
================================================================================
Snapshot for time 1048
Time since last snapshot 14
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 100
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -111,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 68
    Avg Time In Queue: 188
    Avg Time In Check In: 78
    Avg Time In Check In: 80
    Avg Time Total: 727
    Total people in queue: 2
================================================================================
Snapshot for time 1068
Time since last snapshot 20
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -111,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 188
    Avg Time In Check In: 78
    Avg Time In Check In: 80
    Avg Time Total: 727
    Total people in queue: 2
================================================================================
Snapshot for time 1069
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -111,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 188
    Avg Time In Check In: 78
    Avg Time In Check In: 80
    Avg Time Total: 727
    Total people in queue: 2
================================================================================
Snapshot for time 1074
Time since last snapshot 5
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -146,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 181
    Avg Time In Check In: 78
    Avg Time In Check In: 80
    Avg Time Total: 762
    Total people in queue: 1
================================================================================
Snapshot for time 1111
Time since last snapshot 37
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: -146,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 181
    Avg Time In Check In: 78
    Avg Time In Check In: 80
    Avg Time Total: 762
    Total people in queue: 1
================================================================================
Snapshot for time 1162
Time since last snapshot 51
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 100
    Avg Passport Count: 40
    Avg Passport Difference: -184,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 40
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 178
    Avg Time In Check In: 78
    Avg Time In Check In: 80
    Avg Time Total: 800
    Total people in queue: 0
================================================================================
Snapshot for time 1183
Time since last snapshot 21
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -184,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 178
    Avg Time In Check In: 76
    Avg Time In Check In: 80
    Avg Time Total: 800
    Total people in queue: 0
================================================================================
Snapshot for time 1184
Time since last snapshot 1
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -184,5
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 178
    Avg Time In Check In: 76
    Avg Time In Check In: 80
    Avg Time Total: 800
    Total people in queue: 0
================================================================================
Snapshot for time 1204
Time since last snapshot 20
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -55
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 0
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 178
    Avg Time In Check In: 76
    Avg Time In Check In: 80
    Avg Time Total: 834
    Total people in queue: 0
================================================================================
Snapshot for time 1274
Time since last snapshot 70
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: -55
    Airplane Entrance Attendant Ocupation Rate: 100
    Server Ocupation Rate: 20
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 178
    Avg Time In Check In: 76
    Avg Time In Check In: 80
    Avg Time Total: 834
    Total people in queue: 0
================================================================================
Snapshot for time 1345
Time since last snapshot 71
    Checkin Attendant Ocupation Rate: 0
    Metal Detector Ocupation Rate: 0
    Passport Attendant Ocupation Rate: 0
    Avg Passport Count: 40
    Avg Passport Difference: 21,25
    Airplane Entrance Attendant Ocupation Rate: 0
    Server Ocupation Rate: 0
    Ticket Validator Ocupation Rate: 0
    Avg Time In Check In: 49
    Avg Time In Metal Detector: 71
    Avg Time In Queue: 178
    Avg Time In Check In: 76
    Avg Time In Check In: 80
    Avg Time Total: 876
    Total people in queue: 0

```

