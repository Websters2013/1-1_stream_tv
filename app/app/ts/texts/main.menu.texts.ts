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
        icon: '<svg class="main-menu-icon admin-panel" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve"><path d="M20,2.4c0.7,0,1.3,0.3,1.7,1l4.7,9.5l10.5,1.5c1.5,0.2,2.1,2.1,1,3.2L30.3,25l1.8,10.4c0.2,1.2-0.8,2.2-1.8,2.2c-0.3,0-0.6-0.1-0.9-0.2L20,32.5l-9.4,4.9c-0.3,0.1-0.6,0.2-0.9,0.2c-1.1,0-2-1-1.8-2.2L9.7,25l-7.6-7.4c-1.1-1.1-0.5-3,1-3.2l10.5-1.5l4.7-9.5C18.7,2.7,19.3,2.4,20,2.4 M20,0.9c-1.3,0-2.4,0.7-3,1.9l-4.3,8.8L3,13c-1.3,0.2-2.3,1.1-2.7,2.3c-0.4,1.2-0.1,2.5,0.9,3.4l7,6.8l-1.7,9.6c-0.2,1,0.1,2,0.7,2.7c0.6,0.8,1.6,1.2,2.6,1.2c0.5,0,1.1-0.1,1.6-0.4l8.7-4.6l8.7,4.6c0.5,0.3,1,0.4,1.6,0.4c1,0,1.9-0.4,2.6-1.2c0.6-0.8,0.9-1.7,0.7-2.7l-1.7-9.6l7-6.8c0.9-0.9,1.2-2.2,0.9-3.4C39.4,14,38.3,13.1,37,13l-9.7-1.4L23,2.8C22.4,1.6,21.3,0.9,20,0.9L20,0.9z"/> </svg>',
        text: 'В тренде',
        url: '/trends/new'
    },
    {
        icon: '<svg class="main-menu-icon admin-panel" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve"><g><path d="M6.4,34.4c-0.2,0-0.4-0.1-0.5-0.2C2.2,30.6,0,25.5,0,20.2C-0.1,14.8,2,9.7,5.8,5.9c0.3-0.3,0.8-0.3,1.1,0c0.3,0.3,0.3,0.8,0,1.1c-3.5,3.6-5.5,8.3-5.4,13.3c0.1,4.9,2,9.6,5.4,12.9c0.3,0.3,0.3,0.8,0,1.1C6.7,34.3,6.5,34.4,6.4,34.4z"/><path d="M33.7,34.4c-0.2,0-0.4-0.1-0.5-0.2c-0.3-0.3-0.3-0.8,0-1.1c3.6-3.6,5.5-8.4,5.4-13.4c-0.1-4.9-2-9.5-5.4-12.8c-0.3-0.3-0.3-0.8,0-1.1c0.3-0.3,0.8-0.3,1.1,0c3.7,3.5,5.8,8.5,5.9,13.8c0.1,5.4-2,10.5-5.8,14.4C34,34.3,33.8,34.4,33.7,34.4z"/><path d="M11.9,29c-0.2,0-0.4-0.1-0.5-0.2c-2.2-2.2-3.5-5.3-3.6-8.5c0-3.3,1.2-6.5,3.6-8.8c0.3-0.3,0.8-0.3,1.1,0c0.3,0.3,0.3,0.8,0,1.1c-2,2.1-3.2,4.8-3.1,7.8c0,2.9,1.2,5.6,3.1,7.5c0.3,0.3,0.3,0.8,0,1.1C12.2,28.9,12,29,11.9,29z"/><path d="M28.3,29c-0.2,0-0.4-0.1-0.5-0.2c-0.3-0.3-0.3-0.8,0-1.1c2.1-2.1,3.2-4.8,3.2-7.7c0-2.9-1.2-5.6-3.2-7.6c-0.3-0.3-0.3-0.8,0-1.1c0.3-0.3,0.8-0.3,1.1,0c2.3,2.2,3.6,5.4,3.6,8.6c0,3.3-1.3,6.4-3.6,8.7C28.6,28.9,28.4,29,28.3,29z"/><path d="M20,24.7c-1.3,0-2.5-0.5-3.3-1.4c-0.8-0.9-1.3-2-1.2-3.3c0-2.5,2-4.5,4.6-4.5c2.5,0,4.5,2,4.5,4.5C24.6,22.6,22.5,24.7,20,24.7z M20.1,17c-1.8,0-3.1,1.3-3.1,3c0,0.8,0.2,1.6,0.8,2.2c0.6,0.6,1.4,1,2.2,1c1.7,0,3.1-1.4,3.1-3.2C23.1,18.3,21.7,17,20.1,17z"/></g></svg>',
        text: 'On-line',
        url: '/online/one_plus_one'
    }
    // {
    //     icon: '<svg class="main-menu-icon admin-panel" viewBox="0 0 785.2 500" style="enable-background:new 0 0 785.2 500;" xml:space="preserve"><path id="_x31__1_" d="M625,500H149.2c-4.9,0-9.6-2.1-12.8-6c-2-2.2-5.1-6.8-4.4-13.6c5.4-51.5,25.9-99.6,59.3-138.8c29.7-34.9,67.8-61,110.7-75.9c-37-26.6-61.2-70-61.2-119C240.9,65.8,306.7,0,387.5,0S534,65.8,534,146.6c0,49.1-24.2,92.6-61.3,119.2c42.8,15,80.5,41,110,75.8c33.4,39.3,53.9,87.2,59.4,138.9c0.5,4.9-1,10-4.3,13.6C634.6,497.9,629.9,500,625,500z M317.3,276.8C224,304.6,157.5,384.9,147.3,482c0,0.3-0.1,1,0.6,1.8l0.2,0.3c0.2,0.3,0.6,0.6,1.1,0.6H625c0.5,0,0.9-0.3,1.1-0.6l0.2-0.3c0.1-0.1,0.6-0.7,0.5-1.7c-10.2-97.2-76.9-177.6-170.1-205.4c-3.3,1.4-6.5,2.7-9.8,3.9c-18.2,8.1-38.3,12.6-59.4,12.6c-19.4,0-37.9-3.8-54.9-10.6C327.5,280.8,322.4,279,317.3,276.8zM337.9,268.2c15.8,5,32.3,7.6,49.1,7.6c18.7,0,36.8-3.2,54.2-9.4c45.6-20.5,77.6-66.5,77.6-119.7c0-72.4-58.9-131.3-131.2-131.3c-72.4,0-131.3,58.9-131.3,131.3C256.2,201.4,290,248.6,337.9,268.2z"/><path d="M221.3,272.2c-5.2-1.1-10.3-2.4-15.4-4c-49-20-83.2-68.9-81.7-125.2c1.9-68.6,56.9-124.5,125.4-127.5c12.1-0.5,23.8,0.6,35,3.2c2.1,0.5,4.3,0,6.1-1.3l0.2-0.1c5.2-3.9,3.4-12.1-2.9-13.5C277.5,1.3,266.7,0,255.5,0c-80.8,0-146.6,65.8-146.6,146.7c0,49,24.2,92.3,61.2,119c-43,14.9-81,41-110.7,75.9C26,380.8,5.5,428.9,0.1,480.4c-0.7,6.7,2.3,11.3,4.4,13.6c3.2,3.9,7.9,6,12.8,6h93.5c4.9,0,8.5-4.7,7.3-9.5c0-0.1,0-0.1,0-0.2c-0.8-3.3-3.9-5.6-7.3-5.6H17.2c-0.5,0-0.9-0.3-1.1-0.6l-0.2-0.3c-0.7-0.8-0.6-1.5-0.6-1.8c10.2-97.1,76.7-177.4,170-205.2c5.1,2.1,10.2,4,15.3,5.7c5.5,2.2,11.1,4.1,16.9,5.6c4.1,1.1,8.3-1.1,9.8-5.1l0-0.1C229.1,278.3,226.2,273.2,221.3,272.2z"/><path d="M550.2,283.3c0.8,4.7,5.3,7.8,10,6.8c10.3-2.1,20.3-5.3,29.7-9.5c3.3-1.2,6.5-2.4,9.8-3.9c93.2,27.9,159.9,108.2,170.1,205.4c0.1,1-0.4,1.6-0.5,1.7l-0.2,0.3c-0.2,0.3-0.6,0.6-1.1,0.6H663.5c-3.4,0-6.5,2.3-7.3,5.6c0,0.1,0,0.1,0,0.2c-1.2,4.8,2.3,9.4,7.3,9.4H768c4.9,0,9.6-2.1,12.9-5.9c3.3-3.6,4.8-8.7,4.3-13.6c-5.5-51.6-26-99.6-59.4-138.9c-29.5-34.8-67.2-60.8-110-75.8c37-26.6,61.2-69.9,61.3-118.8C677.3,69.8,613.2,2.9,536,0.1c-16.3-0.6-32,1.5-46.7,5.8c-5.9,1.7-7.4,9.5-2.5,13.3l0.1,0.1c1.9,1.5,4.4,2,6.7,1.3c11.7-3.4,24.1-5.3,36.9-5.3c72.3,0,131.2,58.9,131.2,131.3c0,53.2-31.9,99.2-77.6,119.7c-8.8,3.2-17.8,5.5-27,7.1C552.5,274.2,549.4,278.6,550.2,283.3L550.2,283.3z"/></svg>',
    //     text: 'On-line',
    //     url: '/online/one_plus_one'
    // }
];
