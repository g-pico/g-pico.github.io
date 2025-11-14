
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
or check from <a href="https://www.facebook.com/groups/464020849771652" target="_blank" rel="noopener">on-line community</a>.`; // end_of_note_const_2



// 如果要控制是否顯示, 需要到 products 的頁面進行限制,

const products = {
    product1: {
        name: {
            "en": "VCC-GND YD-2040",
            "zh-TW": "源地 YD-2040",
            "zh-CN": "源地 YD-2040",
        },
        brief_description: {
            "en": `The most versatile standard model of the Pico board.
                USB-C, extra RGB LED, user button, and dual LEDs.`,
            "zh-TW": `功能最全面的 Pico 板標準模型。
                Type C 連接埠、額外的 RGB LED、使用者按鈕，以及雙 LED 指示燈。`,
            "zh-CN": `功能最全面的 Pico 板标准模型。
                Type C 接口、额外的 RGB LED、用户按钮，以及双 LED 指示灯。`
        },
        description: {
            "en":   `This is the most versatile standard model of the Pico board created by the <a href="http://vcc-gnd.com/" target="_blank">VCC-GND Stdio</a>.<br>
                    In addition to meeting the standard Pico board specifications, it also supports a reset function, external buttons, and extra RGB LED.<br>
                    It comes with a choice of either 4MB or 16MB of flash memory.<br>
                    <br>
                    <br>
                    Special about this board:  <br>
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
                    <li>There are 2 flash spec 4MB(32Mb, W25Q32) and 16MB(128Mb)</li>
                    <li>Board configuration for different application:</li>
                    <img src="assets/yd-2040/modification_board.png" alt="Description Image"> <br>

                    <br>

                    `,
            "zh-TW": `這是由 <a href="http://vcc-gnd.com/" target="_blank">VCC-GND Stdio</a> 打造的功能最全面的 Pico 板標準模型。<br>
                    除了滿足標準的 Pico 板規格外，它還支援重置功能、外部按鈕和額外的 RGB LED。<br>
                    它提供 4MB 或 16MB 快閃記憶體的選擇。<br>
                    <br>
                    <br>
                    Special about this board:  <br>
                    <li>Type C 連接埠用於連接</li>
                    <li>相容標準的 Pico 板尺寸</li>
                    <li>支援額外的 RGB LED</li>
                    <li>支援使用者自定義按鈕</li>
                    <li>電源輸入指示燈（紅色）</li>
                    <li>Pico 控制的 LED(藍色）</li>
                    <li><a href="assets/yd-2040/YD-2040-2022-V1.1-SCH.pdf" target="_blank">YD-2040</a> 原理圖</li>
                    <li>支援多種開發環境: MicroPython、C/C++ SDK 和 Arduino IDE</li>
                    <li>板載 RP2040 雙核心微控制器，具有靈活的 I/O 選項</li>
                    <li>是學習嵌入式系統和快速原型設計的理想選擇</li>
                    <li>提供多個 GPIO 引腳和介面 (UART, I2C, SPI, ADC) 用於連接外部設備</li>
                    <li>相容各種感測器、顯示器和其他模組</li>
                    <li>全面的社群支援和豐富的線上資源</li>
                    <br>
                    Note: <br>
                    <li>有 4MB(32Mb, W25Q32) 和 16MB(128Mb) 兩種快閃記憶體規格</li>
                    <li>不同應用的板卡配置:</li>
                    <img src="assets/yd-2040/modification_board.png" alt="Description Image"> <br>

                    <br>`,
            "zh-CN": `这是由 <a href="http://vcc-gnd.com/" target="_blank">VCC-GND Stdio</a> 打造的功能最全面的 Pico 板标准模型。<br>
                    除了满足标准的 Pico 板规范外，它还支持复位功能、外部按钮和额外的 RGB LED。<br>
                    它提供 4MB 或 16MB 闪存的选择。<br>
                    <br>
                    <br>
                    Special about this board:  <br>
                    <li>Type C 接口用于连接</li>
                    <li>兼容标准的 Pico 板尺寸</li>
                    <li>支持额外的 RGB LED</li>
                    <li>支持用户自定义按钮</li>
                    <li>电源输入指示灯（红色）</li>
                    <li>Pico 控制的 LED(蓝色）</li>
                    <li><a href="assets/yd-2040/YD-2040-2022-V1.1-SCH.pdf" target="_blank">YD-2040</a> 原理图</li>
                    <li>支持多种开发环境: MicroPython、C/C++ SDK 和 Arduino IDE</li>
                    <li>板载 RP2040 双核微控制器，具有灵活的 I/O 选项</li>
                    <li>是学习嵌入式系统和快速原型的理想选择</li>
                    <li>提供多个 GPIO 引脚和接口 (UART, I2C, SPI, ADC) 用于连接外部设备</li>
                    <li>兼容各种传感器、显示器和其他模块</li>
                    <li>全面的社区支持和丰富的在线资源</li>
                    <br>
                    Note: <br>
                    <li>有 4MB(32Mb, W25Q32) 和 16MB(128Mb) 两种闪存规格</li>
                    <li>不同应用的板卡配置:</li>
                    <img src="assets/yd-2040/modification_board.png" alt="Description Image"> <br>

                    <br>`
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
        brief_description: {
            "en": `Basic standard board from Raspberry pi: RP2040. Micro USB, Bootsel button, 2MB flash and 1 status LED.`,
            "zh-TW": `樹莓派的基礎標準板: RP2040。配備 Micro USB、Boot-SEL 按鈕、2MB 快閃記憶體和 1 個狀態 LED。`,
            "zh-CN": `树莓派的基础标准板: RP2040。配备 Micro USB、Boot-SEL 按钮、2MB 闪存和 1 个状态 LED。`
        },
        description: {
            "en": `A standard product released by <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/" target="_blank">Raspberry Pi</a>
             and finalize the dimension of general pico with a 2MB (16Mb, W25Q16)
            flash configuration that meets basic requirements.
            Micro USB port and BOOTSEL button is used for PC interface.
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
                `,
            "zh-TW": `Raspberry Pi 推出了一款標準產品 <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/" target="_blank">Raspberry Pi</a>，
             它確定了通用 Pico 的尺寸，並提供滿足基本要求的 2MB (16Mb, W25Q16) 快閃記憶體配置。
            Micro USB 連接埠和 BOOTSEL 按鈕用於 PC 介面。<br>
            <br>
            Special about this board:   <br>
            <li>樹莓派官方發布</li>
            <li>Micro USB 連接埠，便於供電和編程</li>
            <li>相容標準的 Pico 板尺寸，適用於各種配件和擴展板</li>
            <li>Pico 控制的板載 LED（綠色）</li>
            <li>基本操作無需額外的硬體修改</li>
            <li>支援多種開發環境：MicroPython、C/C++ SDK 和 Arduino IDE</li>
            <li>板載 RP2040 雙核心微控制器，具有靈活的 I/O 選項</li>
            <li>是學習嵌入式系統和快速原型設計的理想選擇</li>
            <li>提供多個 GPIO 引腳和介面 (UART, I2C, SPI, ADC) 用於連接外部設備</li>
            <li>相容各種感測器、顯示器和其他模組</li>
            <li>全面的社群支援和豐富的線上資源</li>
            <li><a href="assets/pico/pico-datasheet.pdf" target="_blank">Raspberry Pi Pico</a> 數據手冊和原理圖</li>
            <br>`,
            "zh-CN": `Raspberry Pi 推出了一款标准产品 <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/" target="_blank">Raspberry Pi</a>，
             它确定了通用 Pico 的尺寸，并提供满足基本要求的 2MB (16Mb, W25Q16) 闪存配置。
            Micro USB 接口和 BOOTSEL 按钮用于 PC 接口。<br>
            <br>
            Special about this board:   <br>
            <li>树莓派官方发布</li>
            <li>Micro USB 端口，便于供电和编程</li>
            <li>兼容标准的 Pico 板尺寸，适用于各种配件和扩展板</li>
            <li>Pico 控制的板载 LED（绿色）</li>
            <li>基本操作无需额外的硬件修改</li>
            <li>支持多种开发环境：MicroPython、C/C++ SDK 和 Arduino IDE</li>
            <li>板载 RP2040 双核微控制器，具有灵活的 I/O 选项</li>
            <li>是学习嵌入式系统和快速原型的理想选择</li>
            <li>提供多个 GPIO 引脚和接口 (UART, I2C, SPI, ADC) 用于连接外部设备</li>
            <li>兼容各种传感器、显示器和其他模块</li>
            <li>全面的社区支持和丰富的在线资源</li>
            <li><a href="assets/pico/pico-datasheet.pdf" target="_blank">Raspberry Pi Pico</a> 数据手册和原理图</li>
            <br>`
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
        brief_description: {
            "en": `RP2040 standard board with Wi-Fi 4 and Bluetooth 5.2. Micro USB, Bootsel button, 2MB flash and 1 status LED.`,
            "zh-TW": `RP2040 標準板，支援 Wi-Fi 4 和藍牙 5.2。配備 Micro USB、Boot-SEL 按鈕、2MB 快閃記憶體和 1 個狀態 LED。`,
            "zh-CN": `RP2040 标准板，支持 Wi-Fi 4 和蓝牙 5.2。配备 Micro USB、Boot-SEL 按钮、2MB 闪存和 1 个状态 LED。`
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
        `,
            "zh-TW": `A standard product with Wi-Fi 4 and Bluetooth 5.2 Classic released by <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/" target="_blank">Raspberry Pi</a>. <br>
        <br>
        Special about this board:   <br>
        <li>樹莓派官方發布</li>
        <li>支援 Wi-Fi 4 和藍牙 5.2，用於無線通訊</li>
        <li>Micro USB 連接埠用於供電和數據傳輸</li>
        <li>相容標準的 Pico 板尺寸</li>
        <li>板載 LED 可透過 Pico 控制（綠色）</li>
        <li>無需額外的硬體修改</li>
        <li>支援多種開發環境：MicroPython、C/C++ SDK 等</li>
        <li>提供多個 GPIO 引腳和介面 (UART, I2C, SPI, ADC) 用於連接外部設備</li>
        <li>內建 Wi-Fi 和藍牙連接，是 IoT 專案的理想選擇</li>
        <li>社群支援的庫，便於整合到不同的應用中</li>
        <li><a href="assets/pico_w/pico-w-datasheet.pdf" target="_blank">Raspberry Pi Pico W</a> 數據手冊和原理圖</li>
        <br>`,
            "zh-CN": `A standard product with Wi-Fi 4 and Bluetooth 5.2 Classic released by <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/" target="_blank">Raspberry Pi</a>. <br>
        <br>
        Special about this board:   <br>
        <li>树莓派官方发布</li>
        <li>支持 Wi-Fi 4 和蓝牙 5.2，用于无线通信</li>
        <li>Micro USB 端口用于供电和数据传输</li>
        <li>兼容标准的 Pico 板尺寸</li>
        <li>板载 LED 可通过 Pico 控制（绿色）</li>
        <li>无需额外的硬件修改</li>
        <li>支持多种开发环境：MicroPython、C/C++ SDK 等</li>
        <li>提供多个 GPIO 引脚和接口 (UART, I2C, SPI, ADC) 用于连接外部设备</li>
        <li>内置 Wi-Fi 和蓝牙连接，是 IoT 项目的理想选择</li>
        <li>社区支持的库，便于集成到不同的应用中</li>
        <li><a href="assets/pico_w/pico-w-datasheet.pdf" target="_blank">Raspberry Pi Pico W</a> 数据手册和原理图</li>
        <br>`
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
        brief_description: {
        "en": `test_EN`,
        "zh-TW": `test_TW`,
        "zh-CN": `test_CN`
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
            "zh-TW": `A versatile development board by <a href="https://www.lilygo.cc/" target="_blank">LILYGO</a> that combines the power of RP2040 with ESP32-C3.<br>
        <br>
        Special about this board:   <br>
        <li>雙 MCU 組合：RP2040 和 ESP32-C3</li>
        <li>透過 ESP32-C3 提供 Wi-Fi 和藍牙 5.0 功能</li>
        <li>提供多個 GPIO 引腳和介面 (UART, I2C, SPI, ADC) 用於連接外部設備</li>
        <li>USB Type-C 用於供電和數據傳輸</li>
        <li>支援多種開發環境，包括 Arduino IDE、MicroPython 和 C/C++ SDK</li>
        <li>相容 Raspberry Pi Pico 擴展模組</li>
        <li>尺寸緊湊，易於整合到各種專案中</li>
        <li>適用於 IoT、機器人和嵌入式開發</li>
        <br>
        For more information, check the <a href="https://github.com/Xinyuan-LilyGO/T-PicoC3" target="_blank">LILYGO T-PicoC3 文件</a>. <br>

        <br>
        Detail description:   <br>
        這是由 <a href="https://www.lilygo.cc/" target="_blank">LILYGO</a> 推出的一款多功能開發板，它結合了 Raspberry Pi RP2040 和 ESP32-C3 的強大功能。它旨在透過提供廣泛的連線能力和處理能力，支援各種嵌入式和 IoT 應用。 <br>`,
            "zh-CN": `A versatile development board by <a href="https://www.lilygo.cc/" target="_blank">LILYGO</a> that combines the power of RP2040 with ESP32-C3.<br>
        <br>
        Special about this board:   <br>
        <li>双 MCU 组合：RP2040 和 ESP32-C3</li>
        <li>通过 ESP32-C3 提供 Wi-Fi 和蓝牙 5.0 功能</li>
        <li>提供多个 GPIO 引脚和接口 (UART, I2C, SPI, ADC) 用于连接外部设备</li>
        <li>USB Type-C 用于供电和数据传输</li>
        <li>支持多种开发环境，包括 Arduino IDE、MicroPython 和 C/C++ SDK</li>
        <li>兼容 Raspberry Pi Pico 扩展模块</li>
        <li>尺寸紧凑，易于集成到各种项目中</li>
        <li>适用于 IoT、机器人和嵌入式开发</li>
        <br>
        For more information, check the <a href="https://github.com/Xinyuan-LilyGO/T-PicoC3" target="_blank">LILYGO T-PicoC3 文档</a>. <br>

        <br>
        Detail description:   <br>
        这是由 <a href="https://www.lilygo.cc/" target="_blank">LILYGO</a> 推出的一款多功能开发板，它结合了 Raspberry Pi RP2040 和 ESP32-C3 的强大功能。它旨在通过提供广泛的连接性和处理能力，支持各种嵌入式和 IoT 应用。 <br>`
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
        brief_description: {
            "en": `Pico automation expansion board designed for electronic engineers: Extends standard Pico (RP2040) with GPIO,
             Relay, I2C/SPI, PWM/Pulse outputs, and a dedicated Windows GUI for comprehensive automated testing and verification systems.`,
            "zh-TW": `專為電子工程師設計的 Pico 自動化擴展板：擴展標準 Pico (RP2040) 的 GPIO、繼電器、I2C/SPI、PWM/脈衝輸出等功能，
            並配有專屬 Windows GUI，可用於綜合自動化測試與驗證系統。`,
            "zh-CN": `专为电子工程师设计的 Pico 自动化扩展板：扩展标准 Pico (RP2040) 的 GPIO、继电器、I2C/SPI、
            PWM/脉冲输出等功能，并配有专属 Windows GUI，可用于综合自动化测试与验证系统。`
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
            "zh-TW": `一般 Pico 的擴展板，可將 Pico 擴展成一個方便且強大的自動化工具。<br>
                <br>
                <br>
                Special about this board: <br>
                <li>由標準 Pico 供電</li>
                <li>板載 5V 和 3.3V 電源輸出</li>
                <li>6 個通用輸入/輸出 (GPIO)</li>
                <li>1 個 I2C 主介面</li>
                <li>1 個 SPI 主介面</li>
                <li>2 個脈衝輸出</li>
                <li>2 個 PWM 輸出</li>
                <li>8 個繼電器通道，適用於多功能控制</li>

                <br>
                Detail description:   <br>
                此擴展板旨在讓標準 Pico 板能更好地應用於自動化測試系統。靈感來自電子工程師的日常工作，
                我們將各種可能需要的擴展功能整合到此板上。透過利用基於 RP2040 的標準 Pico 板，
                此擴展板可實現通用輸入/輸出 (IO)、繼電器、I2C、SPI、PWM 和脈衝輸出功能，
                極大地提高了電子工程師的日常工作效率。g-Pico 團隊還開發了一個配套的圖形化使用者介面 (GUI)，
                讓您可以在 Windows PC 上透過簡單的圖形介面操作此板。憑藉便捷的安裝和設定，
                您可以快速開始使用這個多功能擴展板。為了進一步整合自動化，g-Pico 團隊將持續開發其他基於 Pico
                的綜合自動化測試和驗證系統，以將電子工程師從重複的測試任務中解放出來。`,
            "zh-CN": `一般 Pico 的扩展板，可将 Pico 扩展成一个方便且强大的自动化工具。<br>
                <br>
                <br>
                Special about this board: <br>
                <li>由标准 Pico 供电</li>
                <li>板载 5V 和 3.3V 电源输出</li>
                <li>6 个通用输入/输出 (GPIO)</li>
                <li>1 个 I2C 主接口</li>
                <li>1 个 SPI 主接口</li>
                <li>2 个脉冲输出</li>
                <li>2 个 PWM 输出</li>
                <li>8 个继电器通道，适用于多功能控制</li>

                <br>
                Detail description:   <br>
                此扩展板旨在让标准 Pico 板能更好地应用于自动化测试系统。灵感来自电子工程师的日常工作，
                我们将各种可能需要的扩展功能集成到此板上。通过利用基于 RP2040 的标准 Pico 板，此扩展板可实现通用输入/输出 (IO)、
                继电器、I2C、SPI、PWM 和脉冲输出功能，极大地提高了电子工程师的日常工作效率。g-Pico 团队还开发了一个配套的图形用户界面
                (GUI)，让您可以在 Windows PC 上通过简单的图形界面操作此板。凭借便捷的安装和设置，您可以快速开始使用这个多功能扩展板。
                为了进一步集成自动化，g-Pico 团队将持续开发其他基于 Pico 的综合自动化测试和验证系统，
                以将电子工程师从重复的测试任务中解放出来。`
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
        brief_description: {
            "en": `test_EN`,
            "zh-TW": `test_TW`,
            "zh-CN": `test_CN`
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
        brief_description: {
            "en": `test_EN`,
            "zh-TW": `test_TW`,
            "zh-CN": `test_CN`
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



/*

description: {
            "en": `The most versatile standard model of the Pico board created by the <a href="http://vcc-gnd.com/" target="_blank">VCC-GND Stdio</a>.<br>
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

*/

