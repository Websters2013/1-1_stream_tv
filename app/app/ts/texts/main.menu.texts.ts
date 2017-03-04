import { Menu } from                  "../things/menu";

export const MAINMENUTEXTS:Menu[] = [
    // {
    //     icon: '<svg class="main-menu-icon orders" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve"> <path d="M36.2,8.7h-7.1V6.5c0-1.9-1.5-3.4-3.4-3.4H14.3c-1.9,0-3.4,1.5-3.4,3.4v2.2H3.8C1.7,8.7,0,10.4,0,12.5v23.7C0,38.3,1.7,40,3.8,40h32.4c1,0,2-0.4,2.7-1.1s1.1-1.7,1.1-2.7V12.5C40,10.4,38.3,8.7,36.2,8.7z M12.4,6.5c0-1,0.8-1.9,1.9-1.9h11.4c1,0,1.9,0.8,1.9,1.9v2.2H12.4V6.5z M3.8,10.2h32.4c1.3,0,2.3,1,2.3,2.3v11H23v-1.6c0-1-0.8-1.8-1.8-1.8h-2.5c-1,0-1.8,0.8-1.8,1.8v1.6H1.5v-11C1.5,11.2,2.5,10.2,3.8,10.2z M18.5,25h3v1.6c0,0.1-0.1,0.3-0.3,0.3h-2.5c-0.1,0-0.3-0.1-0.3-0.3V25z M18.5,23.5v-1.6c0-0.1,0.1-0.3,0.3-0.3h2.5c0.1,0,0.3,0.1,0.3,0.3v1.6H18.5z M37.8,37.8c-0.4,0.4-1,0.7-1.6,0.7H3.8c-1.3,0-2.3-1-2.3-2.3V25H17v1.6c0,1,0.8,1.8,1.8,1.8h2.5c1,0,1.8-0.8,1.8-1.8V25h15.5v11.2C38.5,36.8,38.3,37.4,37.8,37.8z"></path </svg>',
    //     text: 'Orders',
    //     url: '/orders',
    //     api_url:'',
    //     api_route: ''
    // },
    // {
    //     icon: '<svg class="main-menu-icon time-lines" xml:space="preserve" style="enable-background:new 0 0 40 40;" viewBox="0 0 40 40"> <g> <path d="M26.1,16.1l-6.7,8.2c-0.3,0.3-0.2,0.8,0.1,1.1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.3l6.7-8.2c0.3-0.3,0.2-0.8-0.1-1.1C26.8,15.7,26.4,15.8,26.1,16.1z"></path> <path d="M36,14.5l-3.6-3.5c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1l1.3,1.2l-1.4,1.4c-2-2.2-4.7-3.9-7.8-4.6V8H24c0.6,0,1-0.4,1-1V1c0-0.6-0.4-1-1-1H16c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h0.9V10c-3.2,0.7-6,2.4-8.2,4.7l-1.3-1.4l1.3-1.2C9,11.8,9,11.3,8.7,11c-0.3-0.3-0.8-0.3-1.1,0L4,14.5c-0.3,0.3-0.3,0.8,0,1.1c0.1,0.2,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2l1.3-1.2l1.5,1.5c-1.8,2.5-3,5.6-3,9C4.9,33.2,11.7,40,20,40c8.4,0,15.2-6.8,15.2-15.2c0-3.4-1.1-6.5-3-9l1.5-1.5l1.3,1.2c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2C36.3,15.2,36.3,14.7,36,14.5z M16.5,1.5h7.1v5h-7.1V1.5z M18.4,8H22v1.7c-0.6-0.1-1.3-0.1-2-0.1c-0.5,0-1.1,0-1.6,0.1V8z M20,38.5c-7.5,0-13.7-6.1-13.7-13.7c0-7.5,6.1-13.7,13.7-13.7s13.7,6.1,13.7,13.7C33.7,32.4,27.6,38.5,20,38.5z"></path> </g> </svg>',
    //     text: 'Time lines',
    //     url: '/time-lines',
    //     api_url:'',
    //     api_route: ''
    // },
    {
        icon: '<svg class="main-menu-icon admin-panel" xml:space="preserve" style="enable-background:new 0 0 500 500;" viewBox="0 0 500 500" x="0px" y="0px"> <g> <path d="M209.249,500.248c-67.078,0-124.927-0.018-128.136-0.056C66.562,500.021,56,489.485,56,475.142V234.753c0-14.215,10.479-24.65,24.917-24.814c4.665-0.053,9.384-0.042,14.363-0.029c-0.006-0.481-0.012-0.979-0.018-1.493c-0.203-16.528-0.581-47.294,0.042-60.871c1.722-37.564,15.76-70.706,41.724-98.504c14.637-15.671,31.287-27.517,49.485-35.208c13.311-5.625,31.068-12.217,50.399-13.269c64.612-3.521,114.325,22.257,147.759,76.604c15.354,24.958,22.338,54.119,20.757,86.672c-0.58,11.962-0.438,23.829-0.286,36.393c0.038,3.208,0.077,6.479,0.104,9.777c3.965,0.069,7.727,0.117,11.282-0.153c7.655-0.585,14.704,1.767,19.845,6.618c5.355,5.053,8.229,12.435,8.095,20.792l-0.174,232.296l0.001,0.863c0.003,2.261,0.006,4.598-0.173,7.024c-0.968,13.091-11.134,22.642-24.174,22.71C409.705,500.216,300.872,500.248,209.249,500.248zM89.06,224.899c-2.712,0-5.359,0.009-7.973,0.039C74.959,225.007,71,228.86,71,234.753v240.389c0,6.125,3.943,9.978,10.291,10.053c7.58,0.088,320.847,0.061,338.579-0.031c5.171-0.027,8.905-3.569,9.293-8.814c0.138-1.863,0.135-3.823,0.132-5.898l-0.001-0.891l0.174-232.361c0-0.043,0-0.086,0.001-0.129c0.075-4.17-1.097-7.519-3.39-9.682c-2.062-1.945-4.974-2.834-8.41-2.571c-4.494,0.342-8.862,0.263-13.484,0.18c-2.063-0.038-4.188-0.076-6.406-0.076c-4.143,0-7.5-3.358-7.5-7.5c0-5.707-0.069-11.45-0.136-17.004c-0.147-12.234-0.3-24.886,0.303-37.301c1.452-29.893-4.616-55.435-18.55-78.085c-30.33-49.302-75.471-72.675-134.168-69.486c-17.015,0.926-33.188,6.958-45.376,12.108c-16.246,6.865-31.171,17.507-44.362,31.629c-23.463,25.121-36.147,55.048-37.702,88.952c-0.603,13.141-0.214,44.79-0.027,60c0.055,4.498,0.095,7.803,0.095,9.191c0,4.142-3.358,7.5-7.5,7.5c-2.431,0-4.813-0.006-7.155-0.013C93.437,224.905,91.228,224.899,89.06,224.899z M278.676,434h-56.03c-2.125,0-4.156-0.904-5.579-2.484c-2.327-2.584-2.298-6.544-2.074-8.674c0.806-7.681,1.627-15.352,2.45-23.021c0.941-8.783,1.882-17.565,2.799-26.365c0.798-7.67,1.695-16.475,2.378-25.204c-12.431-8.827-19.292-21.732-19.864-37.408c-0.827-22.664,14.844-42.686,37.261-47.605c22.219-4.874,44.947,6.539,54.042,27.143c9.163,20.759,2.359,45.073-16.175,57.921c1.586,13.984,3.031,28.159,4.43,41.867c0.573,5.626,1.147,11.255,1.732,16.892c0.739,7.132,1.437,13.362,2.073,18.522c0.264,2.133-0.401,4.276-1.825,5.886C282.871,433.078,280.825,434,278.676,434z M230.481,419h39.764c-0.361-3.212-0.734-6.684-1.119-10.393c-0.586-5.645-1.161-11.282-1.735-16.918c-1.394-13.671-2.835-27.807-4.412-41.71c-0.703-6.191,1.214-10.48,6.215-13.906v-0.001c12.741-8.729,17.427-25.398,11.143-39.636c-6.223-14.1-21.827-21.898-37.104-18.549c-15.33,3.365-26.048,16.995-25.486,32.408c0.418,11.476,5.128,20.081,14.399,26.306c2.259,1.519,5.98,5.39,5.621,10.279c-0.716,9.737-1.72,19.625-2.606,28.128c-0.918,8.814-1.86,17.611-2.803,26.41C231.729,407.277,231.102,413.136,230.481,419zM343.78,226H157.75c-4.105,0-7.447-3.3-7.5-7.405c-0.005-0.444-0.562-44.608-0.35-64.725c0.248-23.582,8.93-46.458,24.447-64.414c15.531-17.972,36.891-29.834,60.145-33.401c27.585-4.23,54.85,2.5,76.775,18.954c21.514,16.146,35.309,39.825,38.844,66.673c0.941,7.151,0.95,14.263,0.96,21.141c0.003,2.522,0.007,5.13,0.058,7.659c0.122,5.982,0.13,12.286,0.139,18.382l0.008,4.689c0.015,5.503,0.012,10.991,0.008,16.818l-0.003,8.129C351.28,222.642,347.923,226,343.78,226z M165.163,211h171.12v-0.638c0.004-5.81,0.007-11.281-0.008-16.77l-0.008-4.708c-0.009-6.026-0.017-12.257-0.135-18.097c-0.055-2.671-0.059-5.352-0.062-7.944c-0.009-6.695-0.018-13.018-0.831-19.204c-3.005-22.815-14.716-42.929-32.977-56.634c-18.671-14.013-41.933-19.737-65.497-16.125c-40.539,6.219-71.435,41.964-71.868,83.146C164.742,169,165.015,197.521,165.163,211z"></path> </g> </svg>',
        text: 'Patients',
        url: '/patients',
        api_url:'',
        api_route: ''
    }
];
