
/**
'''Purpose:
Provide a backward-compatible i18n field accessor for product data.
- If a field is an object like { "en": "...", "zh-TW": "...", "zh-CN": "..." }, return by current lang.
- If a field is a plain string, return as-is (keeps old data working).

Variables:
- getCurrentLanguage(): external from i18n.js; if unavailable, fallback to <html lang> or "en"
Acceptable Range:
- field can be string or object with language-code keys
'''
*/
function __getCurrentLangSafe(){
    try{
        if (typeof getCurrentLanguage === 'function') return getCurrentLanguage();
        const h = document.documentElement.getAttribute('lang');
        return h || "en";
    }catch(e){
        console.error('error: ', e);
        return "en"; // end_of___getCurrentLangSafe
    }
}

function tField(field){
    try{
        const lang = __getCurrentLangSafe();
        if (field && typeof field === 'object'){
            return field[lang] || field["en"] || Object.values(field)[0];
        }
        return field;
    }catch(e){
        console.error('error: ', e);
        return field; // end_of_tField
    }
}

// products.js
const note_const = `Now we only support shipment to Taiwan. <br>
                    Please contact <a href="mailto:gary49902210@gmail.com" target="_blank">g-Pico service</a> 
                    for shipment to other regions. <br>
                    We will try our best to open the shipping service in other 
                    regions in the future. <br>
                    Great thanks for your support and understanding! :) <br>`;


// 建議放在 note_const 之後
const note_const_2 = `For stock and availibility, please contact with
<a href="mailto:gary49902210@gmail.com" target="_blank" rel="noopener">g-Pico support team</a> 
or check from <a href="https://www.facebook.com/groups/464020849771652">on-line community</a>.`; // end_of_note_const_2


const products = {
    product1: {
        name: {
            "en": "VCC-GND YD-2040",
            "zh-TW": "源地 YD-2040",
            "zh-CN": "源地 YD-2040",
        },
        description: {
            "en": `The most versatile standard model of the Pico board created by the <a href="http://vcc-gnd.com/" target="_blank">VCC-GND Stdio</a>.<br>
                      <br>
                      <br>
                      Special about this board:   <br>
                      <li>Type C port for connection</li>
                      <li>Standard pico board dimension competible</li>
                      <li>Extra RGB LED supported</li>
                      <li>User define button supported</li>
                      <li>Power input indication LED (red)</li>
                      <li>Pico controlled LED (blue)</li>
                      <li>Schematic of <a href="assets/yd-2040/YD-2040-2022-V1.1-SCH.pdf" target="_blank">YD-2040</a></li>
                      <li>Supports multiple development environments: MicroPython, C/C++ SDK, and Arduino IDE</li>
                      <li>Onboard RP2040 dual-core microcontroller with flexible I/O options</li>
                      <li>Ideal for learning embedded systems and rapid prototyping</li>
                      <li>Multiple GPIO pins and interfaces (UART, I2C, SPI, ADC) for connecting external devices</li>
                      <li>Compatible with a wide range of sensors, displays, and other modules</li>
                      <li>Comprehensive community support and a wealth of online resources</li>
                      <br>
                      Note: <br>
                      <li>Our factroy default flash is 4MB(32Mb, W25Q32)</li>
                      <li>Board configuration for different application:</li>
                      <img src="assets/yd-2040/modification_board.png" alt="Description Image"> <br>
                      <li>The package you will get if order from us:</li>
                      <img src="assets/yd-2040/packed.jpg" alt="Description Image"> <br>


                      <br>
                      Detail description:   <br>
                      This is the most versatile standard model of the Pico board created by the <a href="http://vcc-gnd.com/" target="_blank">VCC-GND Stdio</a>.<br>
                      In addition to meeting the standard Pico board specifications, it also supports a reset function, external buttons, and an RGB LED.<br>
                      It comes with a choice of either 4MB or 16MB of flash memory, with the option of selecting the 4MB version.<br>
                    `,
            "zh-TW": `新一代 Pico 家族開發板，帶來更高效能與相容性。<br>
                    <li>RP2350 微控制器（示例）</li>
                    <li>相容既有腳位配置</li>
                    <li>適合學習與快速原型</li>`,
            "zh-CN": `新一代 Pico 系列开发板，提供更高性能与兼容性。<br>
                    <li>RP2350 微控制器（示例）</li>
                    <li>兼容既有引脚</li>
                    <li>适合学习与快速原型</li>`
        },
        price: "NTD$200",
        note: note_const,
        showNote: false, // <--- 新增：不顯示 note
        // us this method to add different string 
        // note: note_const + `Please note that we are` 
        images: [
            "assets/yd-2040/IMG_1-1.jpg",
            "assets/yd-2040/IMG_1-2.jpg",
            "assets/yd-2040/IMG_1-3.jpg",
            "assets/yd-2040/YD-2040-PIN.png",
            "assets/yd-2040/YD2040_dimension.png",
        ]
    },
    product2: {
        name: {
            "en": "Raspberry pi Pico",
            "zh-TW": "樹梅派 Pico",
            "zh-CN": "树莓派 Pico",
        },
        description: {
            "en": `A standard product released by <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/" target="_blank">Raspberry Pi</a> and finalize the dimension of general pico.<br>
                <br>
                <br>
                Special about this board:   <br>
                <li>Raspberry Pi official release</li>
                <li>Micro USB port for easy power supply and programming</li>
                <li>Standard Pico board dimension compatible for various accessories and shields</li>
                <li>Pico controlled onboard LED (green)</li>
                <li>No extra hardware modification needed for basic operation</li>
                <li>Supports multiple development environments: MicroPython, C/C++ SDK, and Arduino IDE</li>
                <li>Onboard RP2040 dual-core microcontroller with flexible I/O options</li>
                <li>Ideal for learning embedded systems and rapid prototyping</li>
                <li>Multiple GPIO pins and interfaces (UART, I2C, SPI, ADC) for connecting external devices</li>
                <li>Compatible with a wide range of sensors, displays, and other modules</li>
                <li>Comprehensive community support and a wealth of online resources</li>
                <li>Datasheet and schematic of <a href="assets/pico/pico-datasheet.pdf" target="_blank">Raspberry Pi Pico</a></li>
                <br>


                <br>
                Detail description:   <br>
                This is a standard product released by <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/" target="_blank">Raspberry Pi</a>. In addition to defining the basic Pico dimensions, it also provides a 2MB (16Mb, W25Q16) flash configuration that meets basic requirements, as well as a standard BOOTSEL button. A micro USB is used as the standard PC interface. 
                `,
            "zh-TW": `新一代 Pico 家族開發板，帶來更高效能與相容性。<br>
                    <li>RP2350 微控制器（示例）</li>
                    <li>相容既有腳位配置</li>
                    <li>適合學習與快速原型</li>`,
            "zh-CN": `新一代 Pico 系列开发板，提供更高性能与兼容性。<br>
                    <li>RP2350 微控制器（示例）</li>
                    <li>兼容既有引脚</li>
                    <li>适合学习与快速原型</li>`
        },

        price: "NTD$200",
        note: note_const,
        // us this method to add different string 
        // note: note_const + `Please note that we are`
        showNote: false, // <--- 新增：不顯示 note
        images: [
            "assets/pico/IMG_2-1.jpg",
            "assets/pico/pico-board.png",
            "assets/pico/pico-pin.png",
            "assets/pico/pico_dimension.png",
        ]
    },
	product3: {
        name: {
            "en": "Raspberry pi PicoW",
            "zh-TW": "樹梅派 PicoW",
            "zh-CN": "树莓派 PicoW",
        },
        description: {
            "en": `A standard product with Wi-Fi 4 and Bluetooth 5.2 Classic released by <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/" target="_blank">Raspberry Pi</a>. <br>
        <br>
        Special about this board:   <br>
        <li>Raspberry Pi official release</li>
        <li>Supports Wi-Fi 4 and Bluetooth 5.2 for wireless communication</li>
        <li>Micro USB port for power and data transfer</li>
        <li>Standard Pico board dimension compatible</li>
        <li>Onboard LED controllable via Pico (green)</li>
        <li>No extra hardware modification needed</li>
        <li>Supports various development environments: MicroPython, C/C++ SDK, and more</li>
        <li>Multiple GPIO pins and interfaces (UART, I2C, SPI, ADC) for connecting external devices</li>
        <li>Ideal for IoT projects with built-in Wi-Fi and Bluetooth connectivity</li>
        <li>Community-supported libraries for easy integration into different applications</li>
        <li>Datasheet and schematic of <a href="assets/pico_w/pico-w-datasheet.pdf" target="_blank">Raspberry Pi Pico W</a></li>
        <br>


        <br>
        Detail description:   <br>
        This is a standard product with Wi-Fi 4 and Bluetooth 5.2 Classic released by <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/" target="_blank">Raspberry Pi</a>. In addition to defining the basic Pico dimensions, it also provides a 2MB (16Mb, W25Q16) flash configuration that meets basic requirements, as well as a standard BOOTSEL button. A micro USB is used as the standard PC interface. <br>
        `,
            "zh-TW": `新一代 Pico 家族開發板，帶來更高效能與相容性。<br>
                    <li>RP2350 微控制器（示例）</li>
                    <li>相容既有腳位配置</li>
                    <li>適合學習與快速原型</li>`,
            "zh-CN": `新一代 Pico 系列开发板，提供更高性能与兼容性。<br>
                    <li>RP2350 微控制器（示例）</li>
                    <li>兼容既有引脚</li>
                    <li>适合学习与快速原型</li>`
        },
        
        price: "$320",
        note: note_const,
        // us this method to add different string 
        // note: note_const + `Please note that we are`
        showNote: false, // <--- 新增：不顯示 note
        images: [
            "assets/pico_w/IMG_2-2.jpg",
            "assets/pico_w/picow_board.png",
            "assets/pico_w/picow_pin.png",
            "assets/pico_w/picow_dimension.png",
        ]
    },
	product4: {
        name: {
            "en": "LILYGO T-PicoC3",
            "zh-TW": "LILYGO T-PicoC3",
            "zh-CN": "LILYGO T-PicoC3",
        },
        description: {
            "en": `A versatile development board by <a href="https://www.lilygo.cc/" target="_blank">LILYGO</a> that combines the power of RP2040 with ESP32-C3.<br>
                <br>
                Special about this board:   <br>
                <li>Dual MCU combination: RP2040 and ESP32-C3</li>
                <li>Provides Wi-Fi and Bluetooth 5.0 capabilities through ESP32-C3</li>
                <li>Multiple GPIO pins and interfaces (UART, I2C, SPI, ADC) for connecting external devices</li>
                <li>USB Type-C for power and data transfer</li>
                <li>Supports various development environments, including Arduino IDE, MicroPython, and C/C++ SDK</li>
                <li>Compatible with Raspberry Pi Pico expansion modules</li>
                <li>Compact size, making it easy to integrate into various projects</li>
                <li>Suitable for IoT, robotics, and embedded development</li>
                <br>
                For more information, check the <a href="https://github.com/Xinyuan-LilyGO/T-PicoC3" target="_blank">LILYGO T-PicoC3 documentation</a>. <br>
                
                <br>
                Detail description:   <br>
                This is a versatile development board by <a href="https://www.lilygo.cc/" target="_blank">LILYGO</a> that combines the power of the Raspberry Pi RP2040 with the ESP32-C3. It is designed to support a wide range of embedded and IoT applications by providing extensive connectivity and processing capabilities. <br>

                
                `,
            "zh-TW": `新一代 Pico 家族開發板，帶來更高效能與相容性。<br>
                    <li>RP2350 微控制器（示例）</li>
                    <li>相容既有腳位配置</li>
                    <li>適合學習與快速原型</li>`,
            "zh-CN": `新一代 Pico 系列开发板，提供更高性能与兼容性。<br>
                    <li>RP2350 微控制器（示例）</li>
                    <li>兼容既有引脚</li>
                    <li>适合学习与快速原型</li>`
        },
        
        price: "NTD$600",
        note: note_const,
        // us this method to add different string 
        // note: note_const + `Please note that we are`
        showNote: false, // <--- 新增：不顯示 note
        images: [
            "assets/t-pico-c3/IMG_2-3.jpg",
            "assets/t-pico-c3/T-PicoC3_en.jpg",
            
        ]
    },
	product5: {
        name: {
            "en": "Pico based Extend board",
            "zh-TW": "Pico 自動化擴充板",
            "zh-CN": "Pico 自动化扩展板",
        },
        description: {
            "en": `Add on for general Pico and extend the Pico to a convenient and strong automation tool<br>
                <br>
                <br>
                Special about this board: <br>
                <li>Board powered by the standard Pico</li>
                <li>Onboard 5V and 3.3V power outputs</li>
                <li>6 General Purpose IO (GPIO)</li>
                <li>1 I2C master interface</li>
                <li>1 SPI master interface</li>
                <li>2 Pulse outputs</li>
                <li>2 PWM outputs</li>
                <li>8 relay channels for versatile control</li>

                <br>
                Detail description:   <br>
                This expansion board is designed to allow the standard Pico board to be 
                better applied in automated testing systems. Inspired by the daily work of 
                electronics engineers, we have integrated various expansion features that might 
                be needed onto this board. By leveraging the RP2040-based standard Pico board, 
                this expansion board can realize General Purpose IO, Relay, I2C, SPI, PWM, and 
                Pulse output functionalities, greatly enhancing the efficiency of electronics 
                engineers in their daily work. The g-Pico team has also developed a companion 
                GUI that allows you to operate the board through a simple graphical interface on 
                a Windows PC. With easy installation and setup, you can quickly start using this 
                versatile expansion board. To further integrate automation, the g-Pico team will 
                continue to develop other Pico-based comprehensive automation testing and verification 
                systems to free electronics engineers from repetitive testing tasks.
                        `,
            "zh-TW": `新一代 Pico 家族開發板，帶來更高效能與相容性。<br>
                    <li>RP2350 微控制器（示例）</li>
                    <li>相容既有腳位配置</li>
                    <li>適合學習與快速原型</li>`,
            "zh-CN": `新一代 Pico 系列开发板，提供更高性能与兼容性。<br>
                    <li>RP2350 微控制器（示例）</li>
                    <li>兼容既有引脚</li>
                    <li>适合学习与快速原型</li>`
        },
        
        price: "NTD$2000",
        note: note_const_2,  // <--- 使用你要的新版 note
        showNote: true,      // <--- 新增：顯示 note

        // us this method to add different string 
        // note: note_const + `Please note that we are`
        images: [
            "assets/extend_board/extend.jpg",

        ]
    },
    // --- Example: NEW MCU (product6) ---
    product6: {
        name: {
            "en": "Raspberry Pi Pico 2",
            "zh-TW": "Raspberry Pi Pico 2",
            "zh-CN": "Raspberry Pi Pico 2",
        },
        description: {
            "en": `A next-gen Pico-family board offering improved performance and compatibility.<br>
                <li>RP2350 microcontroller (example)</li>
                <li>Backward compatible pinout</li>
                <li>Ideal for learning and rapid prototyping</li>`,
            "zh-TW": `新一代 Pico 家族開發板，帶來更高效能與相容性。<br>
                    <li>RP2350 微控制器（示例）</li>
                    <li>相容既有腳位配置</li>
                    <li>適合學習與快速原型</li>`,
            "zh-CN": `新一代 Pico 系列开发板，提供更高性能与兼容性。<br>
                    <li>RP2350 微控制器（示例）</li>
                    <li>兼容既有引脚</li>
                    <li>适合学习与快速原型</li>`
        },
        price: "NTD$xxx",         // 留著也沒關係（你現在頁面不顯示）
        note: note_const,          // 可沿用
        images: [
            "assets/pico2/board_front.jpg"
        ]
        },
        // --- Example: NEW Expansion (product7) ---
        product7: {
        name: {
            "en": "Pico High-Voltage DAC Expansion",
            "zh-TW": "Pico 高電壓 DAC 擴充板",
            "zh-CN": "Pico 高电压 DAC 扩展板"
        },
        description: {
            "en": `An add-on board to provide multi-channel high-resolution DAC outputs for lab automation.<br>
                <li>Up to 16 channels (example)</li>
                <li>16-bit precision</li>
                <li>SPI-based interface</li>`,
            "zh-TW": `提供多通道高解析度 DAC 的擴充板，用於實驗室自動化。<br>
                    <li>最多 16 通道（示例）</li>
                    <li>16-bit 解析度</li>
                    <li>SPI 介面</li>`,
            "zh-CN": `提供多通道高分辨率 DAC 的扩展板，用于实验室自动化。<br>
                    <li>最多 16 通道（示例）</li>
                    <li>16-bit 分辨率</li>
                    <li>SPI 接口</li>`
        },
        price: "NTD$yyy",
        note: note_const_2,  // <--- 使用你要的新版 note
        showNote: true,      // <--- 新增：顯示 note
        images: [
            "assets/exp_dac81416/board.jpg"
        ]
    },
};
