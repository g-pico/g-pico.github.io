/**
 * ts_cs.js
 * GUI 設計服務頁面的多語系設定（繁中 / 簡中 / 英文）
 *
 * 說明：
 * - 所有可翻譯文字或圖片路徑，都透過 data-i18n 與 data-i18n-attr 控制。
 * - 目前 zh-TW 為原始文字，其餘語系預設先複製 zh-TW 內容，方便後續逐步翻譯。
 * - 若某語系缺少對應 key，會自動 fallback 到 zh-TW，確保畫面不會出現空白。
 *
 * 使用方式：
 * - 調整/新增文字：請在 GUI_TRANSLATIONS 對應語系中修改 key 對應的字串。
 * - 調整圖片：找到例如 'img.process_overview.src' 的項目，
 *             將不同語系的路徑改成對應檔案，例如：
 *             zh-TW: images/process_overview_tw.png
 *             en   : images/process_overview_en.png
 *             zh-CN: images/process_overview_cn.png
 */

(function() {
  const GUI_TRANSLATIONS = {
    'zh-TW': {
        'img.pricing_table.src': 'assets/service_form_table/價目表_tw.png',
        'img.process_overview.src': 'assets/service_form_table/專案評估_tw.png',
        'img.process_stage_1.src': 'assets/service_form_table/專案評估_tw.png',
        'img.process_stage_2.src': 'assets/service_form_table/專案開發_tw.png',
        'img.process_stage_3.src': 'assets/service_form_table/保固與維護_tw.png',
        'nav.brand': '橘皮客 GUI 設計服務',
        'nav.home': '回首頁',
        'page.brand': '橘皮客自動化　Gary Chu',
        'page.footer': '本頁內容僅供專案合作與需求溝通使用。若有未盡事宜，歡迎直接與開發方聯繫討論。',
        'page.subtitle': '在自動化與資料導向的時代，我們協助您打造穩定、可靠、具彈性的專業 GUI 介面。',
        'page.title': 'GUI 設計服務流程條款',
        'section.about.list1': '<strong>韌性（Resilience）</strong>：面對專案中不可避免的挑戰與突發狀況，我們具備足夠的耐力與解決問題的能力，確保系統最終能穩定落地。',
        'section.about.list2': '<strong>毅力（Perseverance）</strong>：我們不斷優化模組化架構與開發流程，憑藉日積月累的經驗與持續投入，為客戶帶來可靠且高品質的成果。',
        'section.about.list3': '<strong>彈性（Flexibility）</strong>：每個客戶的需求都不同，我們擅長在既有框架上快速調整，提供最適合的方案，無論是 GUI 設計、硬體控制還是系統整合。',
        'section.about.list4': '我們能夠提供的服務範圍',
        'section.about.list5': '專案的開發流程與時間規劃',
        'section.about.list6': '雙方應遵守的合作條款',
        'section.about.list7': '各項服務的價值與成本依據',
        'section.about.p1': '在當今自動化與數據導向的時代，人機介面（GUI）已不僅僅是顯示數據的工具，而是客戶與系統互動的核心。',
        'section.about.p2': '我們深信，一個好的設計服務不只是完成專案，而是要陪伴客戶一起走過挑戰，確保每一步都能帶來價值。',
        'section.about.p3': '因此，我們的服務理念建立在三個核心精神上：',
        'section.about.p4': '本文件的目的，是希望客戶在專案開始之前，就能清楚了解：',
        'section.about.p5': '透過這樣的規劃，我們不僅交付一個 GUI，而是交付一個能伴隨企業成長、具備<strong>韌性、毅力與彈性<strong/>的完整解決方案，讓客戶能安心專注於核心業務。',
        'section.about.title': '關於橘皮客',
        'section.client_checklist.item1': '<strong>現有系統或 Demo 影片</strong>（若有）：可以是手機拍攝的操作影片，方便我們了解實際流程。',
        'section.client_checklist.item2': '<strong>儀器與硬體清單</strong>：包含儀器型號、通訊介面（UART / I2C / SPI / GPIB / LAN / USB）等。',
        'section.client_checklist.item3': '<strong>通訊協議與指令文件</strong>：例如 SCPI 指令表、通訊時序圖、廠商提供的 PDF 等。',
        'section.client_checklist.item4': '<strong>測試流程或 SOP 文件</strong>：說明平時如何操作、量測哪些數據、判斷 Pass / Fail 的條件。',
        'section.client_checklist.item5': '<strong>報表範例或欄位需求</strong>：可提供舊報表或 Excel 範本，標註必需欄位與格式要求。',
        'section.client_checklist.item6': '<strong>GUI 草圖或舊 GUI 截圖</strong>（若有）：有助於我們理解排版習慣與風格偏好。',
        'section.client_checklist.item7': '<strong>預計使用環境與電腦規格</strong>：例如 OS 版本、螢幕解析度、是否在產線環境等。',
        'section.client_checklist.item8': '<strong>專案時程與內部里程碑</strong>：若您已有內部專案排程，可一併提供，方便我們對齊時程。',
        'section.client_checklist.item9': '<strong>專案驗收項目檢核表</strong>：專案驗收階段各功能項目的測試條件以及驗收標準，判斷產品是否有符合客戶規格。',
        'section.client_checklist.note': '若以上資料尚未齊備，也歡迎先與我們討論，我們可以協助一起整理，逐步補齊。專案的規格剛開始很難完全確定，但希望透過這份文件以及後續的郵件、開會討論可以協助您逐步達成您喜要的目標!',
        'section.client_checklist.p1': '為了縮短前期溝通時間並提升專案準確度，建議您在首次會議或需求提出前，儘可能準備以下資料（可先準備已有的部分，其餘可於後續補充）：',
        'section.client_checklist.title': '客戶需事先準備的資料',
        'section.contact.client_eng_item1': '<strong>技術討論工程師</strong>（負責專案進行中的技術細節討論）',
        'section.contact.client_eng_mail': 'Mail：__________________',
        'section.contact.client_eng_name': '稱呼：__________________',
        'section.contact.client_eng_phone': '手機或 Line ID：__________________',
        'section.contact.client_pm_item1': '<strong>專案經理</strong>（負責時程、功能與一般溝通）',
        'section.contact.client_pm_mail': 'Mail：__________________',
        'section.contact.client_pm_name': '稱呼：__________________',
        'section.contact.client_pm_phone': '手機或 Line ID：__________________',
        'section.contact.client_pm_title': '客戶端聯絡窗口',
        'section.contact.dev_engineer': '<strong>技術工程師：</strong>Gary Chu',
        'section.contact.dev_line': '<strong>Line ID：</strong>tigarychu',
        'section.contact.dev_mail': '<strong>Mail：</strong>gary49902210@gmail.com',
        'section.contact.dev_title': '開發方聯絡窗口（橘皮客自動化）',
        'section.contact.p1': '為了讓專案能順利進行，請客戶提供以下兩位聯絡人資訊：',
        'section.contact.title': '聯絡資料',
        'section.gui_style.item1': '<strong>技術型 / 工具型：</strong>偏向工程師使用，畫面以表格、參數與 Log 為主，重視資訊密度與操作效率。',
        'section.gui_style.item2': '<strong>儀表板型：</strong>使用大型數值、指針表、狀態燈號等呈現重點資訊，適合監控與展示。',
        'section.gui_style.item3': '<strong>簡潔扁平風格：</strong>按鈕與元件設計較為現代、線條簡單，適合對外展示或客戶端使用。',
        'section.gui_style.item4': '<strong>客製混合風格：</strong>若您有既有軟體或品牌識別（Logo、色系），我們可以依現有風格調整 GUI 視覺。',
        'section.gui_style.note': '若目前尚無特別偏好，也可以先以「清楚、好操作」為主，我們會依常見工程用 GUI 的習慣進行設計。',
        'section.gui_style.p1': '雖然本服務主要以技術功能與穩定性為優先，但介面風格仍會影響使用體驗。您可以先思考希望整體感覺偏向哪一類型，我們會在設計時盡量配合：',
        'section.gui_style.title': 'GUI 設計風格示例',
        'section.pricing.img_caption': '圖示：GUI 設計服務價目表（請依實際圖片路徑替換 src）',
        'section.pricing.note': '※ 若有大型專案、長期合作或需多階段擴充之情況，歡迎洽談專案制報價。',
        'section.pricing.p1': '各功能項目請參考下方價目表示意圖。實際費用可能會依照專案複雜度、客製程度及整體規劃而有所調整。',
        'section.pricing.p2': '每一個專案方案，預設皆包含<strong>專案完成後 3 個月內，每月 3 小時的客戶服務（線上討論／技術諮詢）</strong>。',
        'section.pricing.title': '價目表',
        'section.process.detail_flow_p1': '更細部的階段性流程，將依下列示意圖說明。若您已有內部標準開發流程，也可以在雙方討論後進行整合。',
        'section.process.detail_flow_title': '階段性細節流程',
        'section.process.img_main_caption': '圖示：專案主要開發流程（請依實際圖片路徑替換 src）',
        'section.process.img_stage1_caption': '圖示：專案階段性流程（第一部分）',
        'section.process.img_stage2_caption': '圖示：專案階段性流程（第二部分）',
        'section.process.img_stage3_caption': '圖示：專案階段性流程（第三部分）',
        'section.process.p1': '企劃進行時，開發方與客戶需要共同配合，並留意以下主要流程。',
        'section.process.rough_timeline_note': '實際時程會依專案範圍、技術難度及資源配合情況調整，將於專案計畫書中明確載明。',
        'section.process.title': '專案開發流程',
        'section.req_guide.end_note': '以上內容不需要一次完成，只要先提供大致方向即可。我們會在需求訪談與會議中協助補充細節，並整理為正式的專案計畫書。',
        'section.req_guide.flow_item1': '開啟程式 → 選擇 COM Port → 按下「連線」',
        'section.req_guide.flow_item2': '載入測試條件檔 → 按下「開始測試」',
        'section.req_guide.flow_item3': '等測試完成 → 顯示結果 → 匯出報表到指定資料夾',
        'section.req_guide.flow_note': '若有多種情境（例如：工程模式 / 操作員模式），也可以分別描述，我們會協助拆分為不同頁面或權限。',
        'section.req_guide.flow_p1': '請以「使用者實際操作」的角度，簡單描述一個完整流程。例如：',
        'section.req_guide.flow_title': '2. 操作流程（使用步驟）',
        'section.req_guide.gui_layout_item1': '主視窗大致尺寸（例如：1280×720 或全螢幕）',
        'section.req_guide.gui_layout_item2': '按鈕、輸入欄位、列表、圖表等大致位置',
        'section.req_guide.gui_layout_item3': '是否需要多分頁（Tab）或多個對話框視窗',
        'section.req_guide.gui_layout_p1': '您可以使用簡單手繪、PowerPoint、Excel 或任何工具，畫出想像中的畫面配置，並標註大致位置與功能，例如：「左側為測試設定區、右側為即時曲線圖、下方為 Log 區」。',
        'section.req_guide.gui_layout_title': '1. GUI 版面與畫面配置',
        'section.req_guide.hw_item1': '儀器或搭配硬體型號與廠牌（例如：電源供應器、DMM、示波器、Pico 等）',
        'section.req_guide.hw_item2': '通訊介面：UART / I2C / SPI / GPIB / LAN / USB 等',
        'section.req_guide.hw_item3': '是否有現成範例程式（例如：Python、LabVIEW、C）',
        'section.req_guide.hw_item4': '是否能提供通訊協議、指令表或 SCPI 命令文件',
        'section.req_guide.hw_p1': '若 GUI 需要控制儀器、測試板或其他硬體，請盡量提供以下資訊：',
        'section.req_guide.hw_title': '3. 儀器／硬體控制需求',
        'section.req_guide.intro': '為了讓我們能更精準估算工時與成本，並減少後續反覆修改，建議您在提出需求時，盡量依照下列項目進行描述。不需要一次寫得非常完整，可以先用簡單條列，我們會在郵件或會議中協助補充與釐清。',
        'section.req_guide.report_item1': '是否需要 Excel 報表（請提供範例檔或欄位名稱）',
        'section.req_guide.report_item2': '是否需要 CSV / JSON 等機器可讀格式',
        'section.req_guide.report_item3': '是否需支援多次量測結果比對或合併報告',
        'section.req_guide.report_p1': '請簡單說明您希望最後的測試結果以什麼形式呈現，例如：',
        'section.req_guide.report_title': '4. 報表與資料輸出需求',
        'section.req_guide.title': '客戶需求填寫指引',
        'section.req_guide.user_item1': '主要使用者類型：研發 / 量產 / 實驗室 / 教學 等',
        'section.req_guide.user_item2': '是否需要權限區分（例如：一般使用者 vs 管理者）',
        'section.req_guide.user_item3': '預期每天或每週使用頻率',
        'section.req_guide.user_p1': '不同使用者（研發工程師、產線作業員、FAE、客戶端工程師）對介面與功能的需求會不同。若您能提供預期使用族群與環境，我們可以在設計上更貼近實際需求。',
        'section.req_guide.user_title': '5. 使用者族群與使用情境',
        'section.scope.func1': 'GUI 主視窗設計、選單列（menubar）、對話框',
        'section.scope.func2': '資料顯示（表格、圖表、即時數據）',
        'section.scope.func3': '儀器／硬體控制介面（UART、I2C、SPI、GPIB）',
        'section.scope.func4': '報告輸出（Excel、CSV、自動化格式）',
        'section.scope.func_title': '<strong>功能性範圍</strong>',
        'section.scope.nonfunc1': '不包含硬體現場調試（如需，將另行報價）',
        'section.scope.nonfunc2': '不包含第三方商業授權軟體費用（例如專業版工具授權等）',
        'section.scope.nonfunc_title': '<strong>非功能性範圍（排除事項）</strong>',
        'section.scope.title': '服務範圍',
        'section.terms.accept_p1': '當專案完成時，開發方將與客戶於會議中進行測試與驗收。若專案涉及實體硬體，則需安排實體會議或現場測試。',
        'section.terms.accept_p2': '驗收將依照訂金前雙方確認之專案計畫書與驗收項目進行。開發方應針對功能缺失進行修正，但不包含 GUI 額外美化調整。若此階段客戶提出新的需求，將視為新專案或新階段內容，需另行評估與報價。',
        'section.terms.accept_p3': '專案成果交付後，客戶應於一週內支付尾款，以完成結案程序。結案後，若遇到非原專案計畫中功能缺失之修改需求，將視為新專案需求。',
        'section.terms.accept_title': '六、測試驗收與成果交付',
        'section.terms.change_list1': '<strong>小幅調整</strong>（通常不另外計價）：文案修正、欄位名稱調整、顏色或字體微調等，不影響整體架構者。',
        'section.terms.change_list2': '<strong>中度變更</strong>（需評估追加費用）：新增按鈕與對應功能、新增報表格式、增加與新儀器的對接等。',
        'section.terms.change_list3': '<strong>重大變更</strong>（需重新估價或開新專案）：主要流程改寫、測試邏輯全面調整、作業系統平台改變等。',
        'section.terms.change_note': '通常在初版 GUI 確認後，若版面或流程有大幅變更需求，我們會先與您說明影響範圍與工時，經雙方同意後再進行調整。',
        'section.terms.change_p1': '為避免專案過程中因需求持續變動而導致時程與成本大幅增加，雙方將以「專案計畫書」作為主要依據，必要時再透過「變更單」進行調整。',
        'section.terms.change_title': '三、變更需求與加價原則',
        'section.terms.need_eval_list1': '提供 Demo 機與示範操作，並向開發方說明實際需求。',
        'section.terms.need_eval_list2': '由開發方進行 Log 抓取，評估介面協定與實作可行性。',
        'section.terms.need_eval_list3': '開發方與客戶技術工程師進行技術討論，確認需求細節與可行性。',
        'section.terms.need_eval_p1': '開發方將依照客戶提供的相關資料，分析技術可行性、估算開發工時與成本，並提出所需之測試儀器與相關資源，請客戶評估是否能提供開發所需條件。若無法提供，雙方將另行討論替代方案與調整方式。',
        'section.terms.need_eval_p2': '對於已有範例程式或明確客製目標的專案，客戶需在韌體或驅動開發前，提供完整可測試之硬體與接線資訊，以確保能開發出功能相同或可正常對接之系統。主要需配合事項如下：',
        'section.terms.need_eval_p3': '根據專案複雜程度，如有必要，可行性評估階段可能需收取評估費，將於事前與客戶說明。',
        'section.terms.need_eval_title': '一、需求討論與可行性評估',
        'section.terms.plan_update_p1': '開發方應於收取訂金前提供專案計畫書，內容包括：對專案需求功能的理解、預計驗收項目與驗收方式。此文件將作為專案完成時之驗收依據，雙方皆不得單方面修改專案目標與驗收項目。',
        'section.terms.plan_update_p2': '專案啟動後，每2～3 週開發方將向客戶進行進度彙報與已完成功能之展示，以線上會議為主，並將相關資料上傳至雲端硬碟供客戶參考。客戶須於會議中協助確認功能是否符合需求，以避免方向偏差造成交期延誤。',
        'section.terms.plan_update_p3': 'GUI（使用者介面）設計將於開發過程中提供初稿給客戶審閱與確認。完成確認後，除專案計畫書原列之功能必要調整外，將不再進行額外美化或大幅版面修改。',
        'section.terms.plan_update_p4': '客戶應盡量於前期明確提供 GUI 版面初始設計與後續調整需求，以降低來回修正次數。專案提供3 次免費版面修改，超過 3 次者，將以每次新台幣 2,000 元計入尾款。若為開發方遺漏之需求，則不計入此修改次數。',
        'section.terms.plan_update_p5': '開發方與客戶皆需指定一位專案經理與技術溝通窗口（可為同一人），遇到非預期專案調整或技術討論需求時，得以迅速聯繫並維持專案順利進行。',
        'section.terms.plan_update_title': '五、開發規劃與進度更新',
        'section.terms.quote_deposit_p1': '確認需求並完成可行性評估後，開發方將依結果進行專案時程規劃與報價。雙方確認專案目標、報價與時程無誤並達成共識後，客戶需支付<strong>20% 訂金</strong>，以確認專案計畫書內所載之目標與範圍。',
        'section.terms.quote_deposit_p2': '專案啟動後開始計算時程。若後續有新增或重大修改需求，需針對新增項目另行估價。若遇開發方無法完成之情況，將與客戶討論調整計畫與報價方式。',
        'section.terms.quote_deposit_p3': '若客戶需開發方提供原始碼，將依專案大小與難度另行評估費用，並提供具詳細註解之程式碼。',
        'section.terms.quote_deposit_p4': '訂金收據將以開發方銀行帳戶記錄截圖方式回傳給客戶留存。',
        'section.terms.quote_deposit_title': '二、報價與訂金',
        'section.terms.terminate_list1': '若因開發方遇不可預期因素（例如評估錯誤等）需中止專案，客戶可選擇要求全額退還訂金，或接收已完成之部分成果並由雙方協議處理方式。',
        'section.terms.terminate_list2': '若因客戶遇不可預期因素需中止專案，開發方得依照已執行之工作項目與進度進行收費。',
        'section.terms.terminate_title': '四、中止條款與責任歸屬',
        'section.terms.title': '合作條款細節',
        'section.terms.warranty_p1': '專案成果交付後，開發方將提供1 個月功能保固，期間若發現專案功能缺失，可免費協助修正。',
        'section.terms.warranty_p2': '此外，專案結案後3 個月內，每月提供最多3 小時的線上討論與售後技術諮詢服務。若超過此時數，或需開發方到場（on-site）支援，將另行評估費用。',
        'section.terms.warranty_title': '七、後續維護、服務與保固',
        'section.use_cases.item1': '電腦作業系統：<strong>Windows 11 24H2</strong>',
        'section.use_cases.item2': '報告輸入／輸出工具：<strong>Excel 2019 64-bit</strong>',
        'section.use_cases.item3': '必要系統驅動程式：',
        'section.use_cases.note': '※ 若系統需支援其他版本作業系統或額外軟體環境，請於需求討論階段主動說明。<br>※ 必要系統驅動程式部分若有搭配其他的韌體或硬體，可能增加額外使用限制',
        'section.use_cases.p1': '本服務主要針對符合下列開發規格的軟硬體系統，其餘操作環境若有需求，歡迎另行討論可行性。',
        'section.use_cases.subitem1': 'NI MAX（NI VISA 488.2）',
        'section.use_cases.subitem2': 'USB-RS-232 相關驅動',
        'section.use_cases.title': '應用場景',
        'toc.about': '關於橘皮客',
        'toc.client_checklist': '客戶需事先準備的資料',
        'toc.contact': '聯絡資料',
        'toc.gui_style': 'GUI 設計風格示例',
        'toc.pricing': '價目表',
        'toc.process': '專案開發流程',
        'toc.requirements_guide': '客戶需求填寫指引',
        'toc.scope': '服務範圍',
        'toc.terms': '合作條款細節',
        'toc.title': '目錄',
        'toc.use_cases': '應用場景',

        /* ==== 新增：繁體中文價目表 HTML ==== */
        'section.pricing.table_html': `
<table class="pricing-table">
  <thead>
    <tr>
      <th>編號</th>
      <th>類別</th>
      <th>功能名稱</th>
      <th>功能敘述</th>
      <th>功能底價 (NT$)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="col-no">1</td>
      <td class="col-cat">Software</td>
      <td class="col-name">GUI-Welcome 畫面</td>
      <td>
        &#10022; 可顯示公司資訊或其他初始畫面，Default 為顯示圖片後淡出（需客戶提供圖片）。<br/>
        &#10022; 第一次製作底價為 2500，未來重複使用只收工錢 1000<br/>
      </td>
      <td class="col-price">2,500</td>
    </tr>
    <tr>
      <td class="col-no">2</td>
      <td class="col-cat">Software</td>
      <td class="col-name">GUI-顏色調整</td>
      <td>
        &#10022; 依客戶品牌色或既有系統風格，調整整體 GUI 配色（背景色、按鈕色系、文字顏色等）。
      </td>
      <td class="col-price">2,000</td>
    </tr>
    <tr>
      <td class="col-no">3</td>
      <td class="col-cat">Software</td>
      <td class="col-name">GUI-Logo 顯示</td>
      <td>
        &#10022; 於左上角與畫面適當區域顯示公司 Logo。<br/>
        &#10022; 可支援 PNG / JPG 等常見格式；如需多個 Logo 或特殊排版，費用依實際需求調整。<br/>
        &#10022; 在主畫面新增Logo圖示, 加價 1000 , 調整3次以內不額外收修改費, 超過每次收取 500 修改費<br/>
        &#10022; 協助去背-加價 500
      </td>
      <td class="col-price">800</td>
    </tr>
    <tr>
      <td class="col-no">4</td>
      <td class="col-cat">Software</td>
      <td class="col-name">GUI-主要介面及功能</td>
      <td>
        &#10022; 建立主要操作介面與核心功能元件（按鈕、文字框、表格、狀態指示、互動介面等）。<br/>
        &#10022; 含一般複雜度之版面規劃，若功能數量較多或邏輯較複雜，將依實際工時調整報價。<br/>
        &#10022; 介面修改提供3次免費版面修改, 超過每次收取 2000 元修改費<br/>
      </td>
      <td class="col-price">6,000</td>
    </tr>
    <tr>
      <td class="col-no">5</td>
      <td class="col-cat">Software</td>
      <td class="col-name">GUI-Menu bar</td>
      <td>
        &#10022; 規劃與實作上方選單列（Menu bar），例如「檔案 / 檢視 / 編輯 / 工具 / 說明」等。<br/>
        &#10022; 可依需求新增階層式選單與快捷鍵。<br/>
        &#10022; 五個功能以內適用底價(載入設定, 儲存設定, 關於, 離開程式 + 自選*1 )<br/>
      </td>
      <td class="col-price">3,000</td>
    </tr>
    <tr>
      <td class="col-no">6</td>
      <td class="col-cat">Software</td>
      <td class="col-name">GUI-關於資訊</td>
      <td>
        &#10022; 公司的關於資訊升級版, 可插入圖片或連到特定公司, 合作廠商的網址。
      </td>
      <td class="col-price">1,500</td>
    </tr>
    <tr>
      <td class="col-no">7</td>
      <td class="col-cat">Software</td>
      <td class="col-name">GUI-輸入輸出</td>
      <td>
        &#10022; 紀錄量測狀態並輸出<br/>
        &#10022; Default 為 Excel or CSV 檔案不指定排版, 無圖表亦無其他效果之輸入輸出；若需客製報表格式，將依實際欄位與排版需求調整。<br/>
      </td>
      <td class="col-price">1,500</td>
    </tr>
    <tr>
      <td class="col-no">8</td>
      <td class="col-cat">Software</td>
      <td class="col-name">GUI-通訊 driver 介面</td>
      <td>
        &#10022; 建立 RS-232 / RS-485 / I2C / SPI 等通訊介面之 GUI 操作區，並與既有韌體或驅動程式對接（此項目僅含 software driver 介面實作，不含硬體端韌體開發）。<br/>
        &#10022; 此報價內含一種通訊介面建立。<br/>
        &#10022; 若有其他需求需另行估價<br/>
      </td>
      <td class="col-price">13,000</td>
    </tr>
    <tr>
      <td class="col-no">9</td>
      <td class="col-cat">Software</td>
      <td class="col-name">GUI-介面新增多語言</td>
      <td>
        &#10022; 在既有 GUI 架構上新增多語系支援（例如：繁中 / 簡中 / 英文），<br/>
        &#10022; 由統一的字串表管理顯示文字，方便後續擴充。 <br/>
      </td>
      <td class="col-price">3,000</td>
    </tr>
    <tr>
      <td class="col-no">10</td>
      <td class="col-cat">Software</td>
      <td class="col-name">GUI-舊版改進</td>
      <td>
        &#10022; 由之前的案子進行延伸或功能精進。<br/>
        &#10022; 依照修改內容報價可能調整。<br/>
      </td>
      <td class="col-price">3,000</td>
    </tr>
    <tr>
      <td class="col-no">11</td>
      <td class="col-cat">Software<br/>Firmware<br/>Hardware</td>
      <td class="col-name">延長線上客服保固方案（一）</td>
      <td>
        &#10022; 提供線上技術支援與客製諮詢，僅限討論專案內容<br/>
        &#10022; 3小時，每單位20分鐘，無使用期限。<br/>
      </td>
      <td class="col-price">5,400</td>
    </tr>
    <tr>
      <td class="col-no">12</td>
      <td class="col-cat">Software<br/>Firmware<br/>Hardware</td>
      <td class="col-name">延長線上客服保固方案（二）</td>
      <td>
        &#10022; 提供線上技術支援與客製諮詢，僅限討論專案內容<br/>
        &#10022; 1小時，每單位20分鐘，無使用期限。<br/>
      </td>
      <td class="col-price">2,000</td>
    </tr>
    <tr>
      <td class="col-no">13</td>
      <td class="col-cat">Other</td>
      <td class="col-name">其他加項服務</td>
      <td>
        &#10022; 客製報表格式，特殊軟體、韌體、硬體整合等。<br/>
        &#10022; 將依評估結果另行報價。<br/>
      </td>
      <td class="col-price">TBD</td>
    </tr>
    <tr>
      <td class="col-no">14</td>
      <td class="col-cat">Software<br/>Firmware<br/>Hardware</td>
      <td class="col-name">軟體、韌體、硬體整合諮詢</td>
      <td>
        &#10022; 各種系統設計、整合問題諮詢<br/>
        &#10022; 20分鐘，需一次使用完畢。<br/>
        &#10022; 需請客戶先提供討論主題以及相關資訊，評估可以協助才進行後續討論和收費。<br/>
      </td>
      <td class="col-price">2,000</td>
    </tr>
    <tr>
      <td class="col-no">15</td>
      <td class="col-cat">Other</td>
      <td class="col-name">操作手冊、使用說明文件</td>
      <td>
        &#10022; 協助製作操作說明文件。<br/>
        &#10022; 若需指定格式或內容則另行估價。<br/>
        &#10022; 依照專案複雜度調整報價。<br/>
      </td>
      <td class="col-price">3,000</td>
    </tr>
  </tbody>
</table>
        `,

        'section.process.eval_table_html': `
<table class="table-schedule">
  <thead>
    <tr>
      <th>預計完成時程</th>
      <th>持續時間（工作天）</th>
      <th>進行項目</th>
      <th>進行細節</th>
      <th>一般需求時間</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2025/1/15</td>
      <td>10</td>
      <td>可行性評估</td>
      <td>
        ▶ 根據客戶於需求討論提出的需求評估專案可行性（詳細項目請參考可行性評估表格）。<br/>
        ▶ 列出需要客戶提供的必要開發資源。<br/>
        ▶ 必要時可能需要收費，取決於專案大小。
      </td>
      <td>1–4 週</td>
    </tr>
    <tr>
      <td>2025/1/29</td>
      <td>10</td>
      <td>開發規劃</td>
      <td>
        ▶ 規劃專案開發進度預期表。<br/>
        ▶ 製作企畫書（整合各項資料表格）。<br/>
        ▶ 評估彙整報價。
      </td>
      <td>1–4 週</td>
    </tr>
  </tbody>
</table>
        `,

              // === 專案流程總覽：10 個討論步驟 ===
        'section.process.overview_table_html': `
<table class="table-schedule">
  <thead>
    <tr>
      <th>順序</th>
      <th>討論主題</th>
      <th>討論目的</th>
      <th>開發方負責項目</th>
      <th>客戶負責項目</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>需求討論</td>
      <td>了解客戶需求，確定專案範圍與目標</td>
      <td>
        ▶ 引導需求訪談，記錄重點，彙整初步功能清單。<br/>
        ▶ 釐清應用場景與系統使用情境。
      </td>
      <td>
        ▶ 提供需求、功能清單、應用場景與實機示範。<br/>
        ▶ 填寫需求調查表。
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>可行性評估</td>
      <td>技術可行性與資源評估</td>
      <td>
        ▶ 分析技術可行性，估算開發工時與成本。<br/>
        ▶ 提出測試儀器與相關資源需求。
      </td>
      <td>
        ▶ 確認需求細節，回覆可用資源（儀器、文件、技術聯絡人等）。<br/>
        ▶ 提供既有範例程式或協定文件。
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>開發規劃</td>
      <td>制定開發時程與版本里程碑</td>
      <td>
        ▶ 建立專案計畫書、排程與版本控制規劃。<br/>
        ▶ 規劃階段性目標與預期驗收項目。
      </td>
      <td>
        ▶ 確認排程與階段目標。<br/>
        ▶ 提供必要的測試環境、帳號或存取權限。
      </td>
    </tr>
    <tr>
      <td>4</td>
      <td>報價</td>
      <td>針對確定需求提出正式報價與工期</td>
      <td>
        ▶ 拆分工作項目，列出單價與總價。<br/>
        ▶ 說明預估工期與交付內容。
      </td>
      <td>
        ▶ 確認報價與交付時間。<br/>
        ▶ 就報價內容提供修正意見。
      </td>
    </tr>
    <tr>
      <td>5</td>
      <td>下訂與訂金</td>
      <td>確認合作並啟動專案</td>
      <td>
        ▶ 提供合約條款與付款資訊。<br/>
        ▶ 收到訂金後排入正式開發時程。
      </td>
      <td>
        ▶ 簽署合約並支付訂金。<br/>
        ▶ 確認專案啟動日期與主要聯絡窗口。
      </td>
    </tr>
    <tr>
      <td>6</td>
      <td>開發進度更新</td>
      <td>每 2～3 週更新進度與回饋</td>
      <td>
        ▶ 提交進度報告，示範已完成功能。<br/>
        ▶ 記錄會議結論與待辦項目。
      </td>
      <td>
        ▶ 參與進度會議並提供回饋。<br/>
        ▶ 儘早指出方向不符或需調整之處。<br/>
      </td>
    </tr>
    <tr>
      <td>7</td>
      <td>中期驗收</td>
      <td>驗證開發方向與已完成功能</td>
      <td>
        ▶ 提供可測試版本與測試說明文件。<br/>
        ▶ 依回饋進行必要調整。<br/>
      </td>
      <td>
        ▶ 依照實際使用情境進行測試。<br/>
        ▶ 提出改善意見與額外需求。<br/>
      </td>
    </tr>
    <tr>
      <td>8</td>
      <td>測試驗收</td>
      <td>完整功能測試與 Bug 修正</td>
      <td>
        ▶ 執行最終整合測試並修正問題。<br/>
        ▶ 準備驗收報告與相關記錄。<br/>
      </td>
      <td>
        ▶ 依驗收項目逐項測試並確認結果。<br/>
        ▶ 完成測試並簽署驗收確認文件。<br/>
      </td>
    </tr>
    <tr>
      <td>9</td>
      <td>成果交付</td>
      <td>提供最終產品與文件</td>
      <td>
        ▶ 提供最終可執行檔、使用說明與相關文件。<br/>
        ▶ 原始碼或技術移轉資料需要另行報價。<br/>
      </td>
      <td>
        ▶ 確認已取得所有預期成果與文件。<br/>
        ▶ 於7日內完成尾款支付。<br/>
      </td>
    </tr>
    <tr>
      <td>10</td>
      <td>後續維護</td>
      <td>維持系統穩定運作並持續改善</td>
      <td>
        ▶ 提供保固與維護方案，說明服務內容與聯絡窗口。<br/>
        ▶ 視專案需求安排線上或到場技術支援。
      </td>
      <td>
        ▶ 使用過程中回報問題與改善建議。<br/>
        ▶ 若有新需求，可作為下一階段專案討論基礎。
      </td>
    </tr>
  </tbody>
</table>
        `,

                // 專案開發階段時程表
        'section.process.dev_table_html': `
<table class="table-schedule">
  <thead>
    <tr>
      <th>預計完成時程</th>
      <th>平均需求（工作天）</th>
      <th>進行項目</th>
      <th>進行細節</th>
      <th>一般需求時間</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2025/3/14</td>
      <td>10</td>
      <td>GUI 介面開發</td>
      <td>
        ▶ 依照客戶需求開發主要 GUI 介面。<br/>
        ▶ 初版畫面完成後，安排會議進行確認與調整。
      </td>
      <td>1–4 週</td>
    </tr>
    <tr>
      <td>2025/3/28</td>
      <td>10</td>
      <td>GUI 介面討論調校</td>
      <td>
        ▶ 持續與客戶討論並調整 GUI 設計。<br/>
        ▶ 修正操作流程與版面細節，確保符合實際使用情境。
      </td>
      <td>1–4 週</td>
    </tr>
    <tr>
      <td>2025/4/25</td>
      <td>20</td>
      <td>功能開發與整合</td>
      <td>
        ▶ 開發目標所需實際功能。<br/>
        ▶ 整合軟體、韌體與硬體，進行上機測試與實機調校。<br/>
        ▶ 視專案難度，可能需要超過 6 週。
      </td>
      <td>2–6 週</td>
    </tr>
    <tr>
      <td>2025/5/2</td>
      <td>5</td>
      <td>整機 Demo 測試、驗收會議</td>
      <td>
        ▶ 依照企劃書約定之項目進行驗收。<br/>
        ▶ 完成驗收雙方在驗收單簽名確認。
      </td>
      <td>1–2 週</td>
    </tr>
    <tr>
      <td>2025/5/9</td>
      <td>5</td>
      <td>結案準備</td>
      <td>
        ▶ 交付 EXE 檔之後，客戶需於一週內匯款完成尾款。<br/>
        ▶ 結案，並開始計算保固。
      </td>
      <td>1–2 週</td>
    </tr>
  </tbody>
</table>
        `,

        // 保固與維護階段時程表
        'section.process.warranty_table_html': `
<table class="table-schedule">
  <thead>
    <tr>
      <th>預計到期時間</th>
      <th>持續時間（天）</th>
      <th>進行項目</th>
      <th>進行細節</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2025/5/31</td>
      <td>30</td>
      <td>產品保固</td>
      <td>
        ▶ 自專案完成驗收起 1 個月內，若發現功能缺失，開發方將協助修正。<br/>
        ▶ 修正範圍以原專案計畫書所列功能為主。
      </td>
    </tr>
    <tr>
      <td>2025/7/30</td>
      <td>90</td>
      <td>客戶服務</td>
      <td>
        ▶ 自專案完成起 3 個月內，每月提供最多 3 小時線上技術討論支援。<br/>
        ▶ 維護時間若超過時數，或需現場 on-site 支援，將另外評估收費。
      </td>
    </tr>
  </tbody>
</table>
        `,

                // ===== 專案流程：各階段表格前後說明 =====
        'section.process.eval_intro': '以 2025/1/1 受理專案為例，下列表格說明自專案受理後，從可行性評估到開發規劃的大致時程與雙方分工。',
        'section.process.eval_note': '※ 實際時程會依需求複雜度與客戶提供資料的完整度進行調整，詳細內容可於需求會議中再行確認。',

        'section.process.dev_intro': '以 2025/3/1 啟動專案為例，當專案正式啟動後，我們會依下列表格規劃 GUI 開發與功能整合的各個階段，並搭配定期進度回報。',
        'section.process.dev_note': '※ 若專案功能較多或需搭配第三方設備整合，開發階段的總週期可能會延長，我們會在報價與排程階段事先說明。',

        'section.process.warranty_intro': '以 2025/3/1 完成專案為例，專案完成與驗收後，仍提供一段時間的保固與技術支援，下列表格整理了保固與客戶服務的範圍與時間。',
        'section.process.warranty_note': '※ 保固範圍以原專案規格書與企劃書中約定的功能為主，額外需求或功能擴充將另行評估與報價。',



    },
    'en': {
    'img.pricing_table.src': 'images/pricing_table.png',
    'img.process_overview.src': 'images/process_overview.png',
    'img.process_stage_1.src': 'images/process_stage_1.png',
    'img.process_stage_2.src': 'images/process_stage_2.png',
    'img.process_stage_3.src': 'images/process_stage_3.png',
    'nav.brand': 'g-Pico GUI Design Services',
    'nav.home': 'Back to Homepage',
    'page.brand': 'g-Pico Automation Gary Chu',
    'page.footer': 'The content of this page is for project collaboration and requirement communication only. For any outstanding matters, please contact the developer directly for discussion.',
    'page.subtitle': 'In the era of automation and data-driven systems, we help you build stable, reliable, and flexible professional GUI interfaces.',
    'page.title': 'GUI Design Service Process and Terms',
    'section.about.list1': 'Resilience: Facing the inevitable challenges and contingencies in a project, we possess sufficient endurance and problem-solving abilities to ensure the system is stably deployed.',
    'section.about.list2': 'Perseverance: We continuously optimize modular architecture and development processes, delivering reliable and high-quality results through accumulated experience and sustained commitment.',
    'section.about.list3': 'Flexibility: Every client\'s needs are unique. We excel at rapidly adjusting within existing frameworks to provide the most suitable solutions, whether for GUI design, hardware control, or system integration.',
    'section.about.list4': 'Scope of Services We Offer',
    'section.about.list5': 'Project Development Process and Timeline',
    'section.about.list6': 'Terms of Collaboration to be Observed by Both Parties',
    'section.about.list7': 'Value and Cost Basis of Various Services',
    'section.about.p1': 'In today\'s era of automation and data-driven systems, the Human-Machine Interface (GUI) is no longer just a tool for displaying data, but the core of client interaction with the system.',
    'section.about.p2': 'We deeply believe that good design service is not just about completing a project, but about accompanying the client through challenges, ensuring every step brings value.',
    'section.about.p3': 'Therefore, our service philosophy is built upon three core principles:',
    'section.about.p4': 'The purpose of this document is to ensure clients clearly understand the following before the project begins:',
    'section.about.p5': 'Through this planning, we deliver not only a GUI but a complete solution with resilience, perseverance, and flexibility that can grow with the enterprise, allowing clients to focus on their core business.',
    'section.about.title': 'About g-Pico',
    'section.client_checklist.item1': 'Existing system or demo video (if any): Can be a video of the operation taken by a phone to help us understand the actual process.',
    'section.client_checklist.item2': 'Instrument and hardware list: Including instrument models, communication interfaces (UART / I2C / SPI / GPIB / LAN / USB), etc.',
    'section.client_checklist.item3': 'Communication protocols and command documents: E.g., SCPI command tables, communication timing diagrams, manufacturer-provided PDFs, etc.',
    'section.client_checklist.item4': 'Test procedure or SOP documents: Explaining how to operate normally, which data to measure, and the Pass/Fail conditions.',
    'section.client_checklist.item5': 'Report examples or field requirements: Can provide old reports or Excel templates, marking required fields and format requirements.',
    'section.client_checklist.item6': 'GUI sketches or old GUI screenshots (if any): Helps us understand layout habits and style preferences.',
    'section.client_checklist.item7': 'Expected usage environment and computer specifications: E.g., OS version, screen resolution, whether it\'s in a production line environment, etc.',
    'section.client_checklist.item8': 'Project schedule and internal milestones: If you already have an internal project timeline, please provide it so we can align our schedules.',
    'section.client_checklist.note': 'If the above information is not yet complete, you are welcome to discuss it with us first. We can help organize it together and gradually fill in the gaps. Project specifications are often hard to finalize at the start, but we hope this document and subsequent email/meeting discussions will help you gradually achieve your desired goals!',
    'section.client_checklist.p1': 'To shorten initial communication time and improve project accuracy, it is recommended that you prepare the following information as much as possible before the first meeting or requirement submission (you may start with what you have, and supplement the rest later):',
    'section.client_checklist.title': 'Required Preparation Materials from the Client',
    'section.contact.client_eng_item1': 'Technical Discussion Engineer (responsible for technical details during the project) Name: __________________ Mail: __________________ Mobile or Line ID: __________________',
    'section.contact.client_eng_mail': 'Mail: __________________',
    'section.contact.client_eng_name': 'Name: __________________',
    'section.contact.client_eng_phone': 'Mobile or Line ID: __________________',
    'section.contact.client_pm_item1': 'Project Manager (responsible for schedule, features, and general communication) Name: __________________ Mail: __________________ Mobile or Line ID: __________________',
    'section.contact.client_pm_mail': 'Mail: __________________',
    'section.contact.client_pm_name': 'Name: __________________',
    'section.contact.client_pm_phone': 'Mobile or Line ID: __________________',
    'section.contact.client_pm_title': 'Client Contact Window',
    'section.contact.dev_engineer': 'Technical Engineer: Gary Chu',
    'section.contact.dev_line': 'Line ID: tigarychu',
    'section.contact.dev_mail': 'Mail: gary49902210@gmail.com',
    'section.contact.dev_title': 'Developer Contact Window (g-Pico Automation)',
    'section.contact.p1': 'To ensure the smooth execution of the project, please provide the contact information for the following two contacts:',
    'section.contact.title': 'Contact Information',
    'section.gui_style.item1': 'Technical / Tool Type: Favored by engineers, screen dominated by tables, parameters, and logs, emphasizing information density and operational efficiency.',
    'section.gui_style.item2': 'Dashboard Type: Uses large numerical values, dial gauges, status lights, etc., to present key information, suitable for monitoring and display.',
    'section.gui_style.item3': 'Clean Flat Style: Buttons and component designs are modern, with simple lines, suitable for external presentation or client use.',
    'section.gui_style.item4': 'Custom Hybrid Style: If you have existing software or brand identity (Logo, color scheme), we can adjust the GUI visuals based on the current style.',
    'section.gui_style.note': 'If there is no particular preference yet, you can prioritize "Clarity and Ease of Operation." We will design according to common engineering GUI practices.',
    'section.gui_style.p1': 'Although this service primarily prioritizes technical functionality and stability, the interface style still affects the user experience. You may consider which type you prefer, and we will try our best to accommodate it during the design process:',
    'section.gui_style.title': 'GUI Design Style Examples',
    'section.pricing.img_caption': 'Illustration: GUI Design Service Pricing Table (Please replace src with the actual image path)',
    'section.pricing.note': '※ For large projects, long-term collaboration, or multi-stage expansion needs, please contact us for custom project-based quotes.',
    'section.pricing.p1': 'Please refer to the pricing table illustration below for various functional items. The actual cost may be adjusted based on project complexity, degree of customization, and overall planning.',
    'section.pricing.p2': 'Each project proposal includes 3 hours of client service per month (online discussion/technical consultation) within 3 months after project completion.',
    'section.pricing.title': 'Pricing Table',
    'section.process.detail_flow_p1': 'More detailed phased processes will be illustrated in the following diagram. If you have an internal standard development process, it can also be integrated after discussion between both parties.',
    'section.process.detail_flow_title': 'Phased Detailed Process',
    'section.process.img_main_caption': 'Illustration: Main Project Development Process (Please replace src with the actual image path)',
    'section.process.img_stage1_caption': 'Illustration: Project Phased Process (Part 1)',
    'section.process.img_stage2_caption': 'Illustration: Project Phased Process (Part 2)',
    'section.process.img_stage3_caption': 'Illustration: Project Phased Process (Part 3)',
    'section.process.p1': 'During the planning phase, the developer and client need to collaborate and pay attention to the following main processes.',
    'section.process.rough_timeline_note': 'The actual timeline will be adjusted according to the project scope, technical difficulty, and resource availability, and will be clearly documented in the Project Proposal.',
    'section.process.title': 'Project Development Process',
    'section.req_guide.end_note': 'The above content does not need to be completed all at once; only a general direction is needed initially. We will assist in supplementing details during requirement interviews and meetings and compile them into a formal Project Proposal.',
    'section.req_guide.flow_item1': 'Open Program → Select COM Port → Press "Connect"',
    'section.req_guide.flow_item2': 'Load Test Condition File → Press "Start Test"',
    'section.req_guide.flow_item3': 'Wait for Test Completion → Display Results → Export Report to Specified Folder',
    'section.req_guide.flow_note': 'If there are multiple scenarios (e.g., Engineer Mode / Operator Mode), they can also be described separately, and we will help split them into different pages or permissions.',
    'section.req_guide.flow_p1': 'Please briefly describe a complete process from the perspective of "actual user operation." For example:',
    'section.req_guide.flow_title': '2. Operation Flow (Steps)',
    'section.req_guide.gui_layout_item1': 'Approximate main window size (e.g., 1280×720 or full screen)',
    'section.req_guide.gui_layout_item2': 'Approximate locations of buttons, input fields, lists, charts, etc.',
    'section.req_guide.gui_layout_item3': 'Whether multiple tabs or multiple dialogue windows are required',
    'section.req_guide.gui_layout_p1': 'You can use simple hand drawings, PowerPoint, Excel, or any tool to sketch the desired screen layout, and mark the general positions and functions, such as: "Left side for test settings, right side for real-time curve graph, bottom for Log area."',
    'section.req_guide.gui_layout_title': '1. GUI Layout and Screen Configuration',
    'section.req_guide.hw_item1': 'Instrument or accompanying hardware model and brand (e.g., Power Supply, DMM, Oscilloscope, Pico, etc.)',
    'section.req_guide.hw_item2': 'Communication interface: UART / I2C / SPI / GPIB / LAN / USB, etc.',
    'section.req_guide.hw_item3': 'Is there an existing example program (e.g., Python, LabVIEW, C)',
    'section.req_guide.hw_item4': 'Can communication protocols, command tables, or SCPI command documents be provided',
    'section.req_guide.hw_p1': 'If the GUI needs to control instruments, test boards, or other hardware, please provide the following information as much as possible:',
    'section.req_guide.hw_title': '3. Instrument / Hardware Control Requirements',
    'section.req_guide.intro': 'To enable us to more accurately estimate man-hours and costs, and reduce subsequent iterative revisions, it is recommended that you describe the requirements according to the following items as much as possible when submitting them. It is not necessary to write everything completely at once; simple bullet points are fine initially, and we will assist in supplementing and clarifying them via email or meetings.',
    'section.req_guide.report_item1': 'Is an Excel report required (Please provide a sample file or column names)',
    'section.req_guide.report_item2': 'Is a machine-readable format like CSV / JSON required',
    'section.req_guide.report_item3': 'Is support required for comparing multiple measurement results or merging reports',
    'section.req_guide.report_p1': 'Please briefly explain in what form you hope the final test results will be presented, for example:',
    'section.req_guide.report_title': '4. Report and Data Output Requirements',
    'section.req_guide.title': 'Client Requirement Submission Guide',
    'section.req_guide.user_item1': 'Main user type: R&D / Mass Production / Laboratory / Teaching, etc.',
    'section.req_guide.user_item2': 'Is permission differentiation required (e.g., General User vs. Administrator)',
    'section.req_guide.user_item3': 'Expected daily or weekly usage frequency',
    'section.req_guide.user_p1': 'Different users (R&D engineers, production line operators, FAE, client engineers) have different interface and feature requirements. If you can provide the expected user group and environment, we can design to better match actual needs.',
    'section.req_guide.user_title': '5. User Groups and Usage Scenarios',
    'section.scope.func1': 'GUI main window design, menubar, dialogue boxes',
    'section.scope.func2': 'Data display (tables, charts, real-time data)',
    'section.scope.func3': 'Instrument / Hardware control interface (UART, I2C, SPI, GPIB)',
    'section.scope.func4': 'Report output (Excel, CSV, automated formats)',
    'section.scope.func_title': 'Functional Scope',
    'section.scope.nonfunc1': 'Does not include on-site hardware debugging (if required, a separate quote will be provided)',
    'section.scope.nonfunc2': 'Does not include third-party commercial licensing software fees (e.g., professional tool licenses, etc.)',
    'section.scope.nonfunc_title': 'Non-Functional Scope (Exclusions)',
    'section.scope.title': 'Scope of Services',
    'section.terms.accept_p1': 'Upon project completion, the developer will conduct testing and acceptance with the client during a meeting. If the project involves physical hardware, a physical meeting or on-site testing will be arranged.',
    'section.terms.accept_p2': 'Acceptance will proceed according to the Project Proposal and acceptance items confirmed by both parties before the deposit. The developer should correct functional deficiencies but does not include additional GUI aesthetic adjustments. If the client proposes new requirements at this stage, they will be considered a new project or phase content, requiring separate evaluation and quotation.',
    'section.terms.accept_p3': 'After the project deliverable is handed over, the client should pay the final balance within one week to complete the closing procedure. After closing, requests for modifications due to functional deficiencies not listed in the original Project Proposal will be considered as new project requirements.',
    'section.terms.accept_title': 'VI. Testing Acceptance and Deliverable Handover',
    'section.terms.change_list1': 'Minor Adjustments (usually no extra charge): Copywriting correction, field name adjustment, minor color or font tweaks that do not affect the overall structure.',
    'section.terms.change_list2': 'Moderate Changes (may require additional cost evaluation): Adding new buttons and corresponding functions, adding new report formats, adding interface to a new instrument, etc.',
    'section.terms.change_list3': 'Major Changes (requires re-estimation or new project): Rewriting the main workflow, comprehensive adjustment of test logic, change in operating system platform, etc.',
    'section.terms.change_note': 'Typically, after the initial GUI draft is confirmed, if there are major change requests for the layout or workflow, we will first explain the scope of impact and man-hours to you, and proceed with the adjustment only after mutual agreement.',
    'section.terms.change_p1': 'To prevent significant increases in schedule and cost due to continuous requirement changes during the project, both parties will use the "Project Proposal" as the primary basis, making adjustments via a "Change Request Form" when necessary.',
    'section.terms.change_title': 'III. Change Requests and Additional Pricing Principles',
    'section.terms.need_eval_list1': 'Provide a demo unit and demonstration of operation, and explain the actual requirements to the developer.',
    'section.terms.need_eval_list2': 'Developer performs log capture to evaluate interface protocol and implementation feasibility.',
    'section.terms.need_eval_list3': 'Developer discusses technical details and confirms requirements and feasibility with the client\'s technical engineer.',
    'section.terms.need_eval_p1': 'The developer will analyze technical feasibility, estimate development man-hours and costs based on the information provided by the client, and propose the necessary testing instruments and related resources. The client must evaluate whether the required development conditions can be provided. If not, both parties will discuss alternative solutions and adjustment methods.',
    'section.terms.need_eval_p2': 'For projects with existing example programs or clear customization goals, the client must provide complete, testable hardware and wiring information before firmware or driver development to ensure the developed system functions identically or can interface correctly. The main cooperation points are as follows:',
    'section.terms.need_eval_p3': 'Depending on the project complexity, a feasibility assessment fee may be charged if necessary, which will be communicated to the client beforehand.',
    'section.terms.need_eval_title': 'I. Requirement Discussion and Feasibility Assessment',
    'section.terms.plan_update_p1': 'The developer shall provide a Project Proposal before collecting the deposit, which includes: understanding of project required functions, anticipated acceptance items, and acceptance method. This document will serve as the basis for acceptance upon project completion, and neither party may unilaterally modify the project goals or acceptance items.',
    'section.terms.plan_update_p2': 'After the project starts, the developer will provide progress reports and demonstrations of completed functions to the client every 2-3 weeks, primarily via online meetings, and upload relevant data to the cloud drive for client reference. The client must assist in confirming during the meeting whether the functions meet the requirements to avoid deviation that causes schedule delays.',
    'section.terms.plan_update_p3': 'The GUI (User Interface) design will be provided as an initial draft to the client for review and confirmation during the development process. Once confirmed, no further aesthetic enhancement or major layout changes will be made, except for necessary adjustments to functions originally listed in the Project Proposal.',
    'section.terms.plan_update_p4': 'The client should clearly provide the initial GUI layout design and subsequent adjustment needs in the early stages as much as possible to reduce the number of revisions. The project includes 3 free layout modifications. Beyond 3 times, each additional modification will incur a charge of NT$2,000, which will be added to the final payment. Modifications due to developer oversight will not count towards this limit.',
    'section.terms.plan_update_p5': 'Both the developer and the client need to designate a Project Manager and a Technical Communication Contact (can be the same person) to ensure swift communication and smooth project execution in case of unexpected project adjustments or technical discussion needs.',
    'section.terms.plan_update_title': 'V. Development Planning and Progress Updates',
    'section.terms.quote_deposit_p1': 'After confirming requirements and completing the feasibility assessment, the developer will plan the project timeline and provide a quote based on the results. After both parties confirm the project goals, quote, and timeline are correct and reach a consensus, the client must pay a 20% deposit to confirm the goals and scope documented in the Project Proposal.',
    'section.terms.quote_deposit_p2': 'The timeline starts calculating once the project is launched. If there are subsequent new or major modification requests, a separate quote will be provided for the new items. If the developer encounters a situation where completion is impossible, the adjustment plan and quotation method will be discussed with the client.',
    'section.terms.quote_deposit_p3': 'If the client requires the developer to provide the source code, the fee will be evaluated separately based on the project size and difficulty, and the code will be provided with detailed comments.',
    'section.terms.quote_deposit_p4': 'The deposit receipt will be returned to the client as a screenshot of the developer\'s bank account record for safekeeping.',
    'section.terms.quote_deposit_title': 'II. Quotation and Deposit',
    'section.terms.terminate_list1': 'If the developer needs to terminate the project due to unforeseen circumstances (e.g., incorrect estimation), the client may choose to request a full refund of the deposit, or accept the partially completed deliverables with mutual agreement on the handling method.',
    'section.terms.terminate_list2': 'If the client needs to terminate the project due to unforeseen circumstances, the developer may charge based on the executed work items and progress.',
    'section.terms.terminate_title': 'IV. Termination Clause and Responsibility Attribution',
    'section.terms.title': 'Detailed Terms of Collaboration',
    'section.terms.warranty_p1': 'After the project deliverable is handed over, the developer will provide a 1-month function warranty. Functional deficiencies discovered during this period can be corrected free of charge.',
    'section.terms.warranty_p2': 'In addition, within 3 months after project closing, we provide a maximum of 3 hours of online discussion and after-sales technical consultation service per month. If this time limit is exceeded, or if on-site support by the developer is required, the cost will be evaluated separately.',
    'section.terms.warranty_title': 'VII. Post-Completion Maintenance, Service, and Warranty',
    'section.use_cases.item1': 'Computer Operating System: Windows 11 24H2',
    'section.use_cases.item2': 'Report Input/Output Tool: Excel 2019 64-bit',
    'section.use_cases.item3': 'Necessary System Drivers: NI MAX (NI VISA 488.2), USB-RS-232 related drivers',
    'section.use_cases.note': '※ If the system needs to support other versions of the operating system or additional software environments, please proactively state this during the requirement discussion phase. ※ The necessary system driver part may add extra usage restrictions if paired with other firmware or hardware.',
    'section.use_cases.p1': 'This service primarily targets software and hardware systems that meet the following development specifications. For other operating environment requirements, you are welcome to discuss feasibility separately.',
    'section.use_cases.subitem1': 'NI MAX (NI VISA 488.2)',
    'section.use_cases.subitem2': 'USB-RS-232 related drivers',
    'section.use_cases.title': 'Application Scenarios',
    'toc.about': 'About g-Pico',
    'toc.client_checklist': 'Required Preparation Materials from the Client',
    'toc.contact': 'Contact Information',
    'toc.gui_style': 'GUI Design Style Examples',
    'toc.pricing': 'Pricing Table',
    'toc.process': 'Project Development Process',
    'toc.requirements_guide': 'Client Requirement Submission Guide',
    'toc.scope': 'Scope of Services',
    'toc.terms': 'Detailed Terms of Collaboration',
    'toc.title': 'Table of Contents',
    'toc.use_cases': 'Application Scenarios',



    'section.pricing.table_html': `
<table class="pricing-table">
  <thead>
    <tr>
      <th>No.</th>
      <th>Category</th>
      <th>Feature Name</th>
      <th>Description</th>
      <th>Base Price (NT$)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="col-no">1</td>
      <td class="col-cat">Software</td>
      <td class="col-name">GUI Welcome Screen</td>
      <td>
        Shows company information or a project closing screen.<br/>
        Default behavior: fade-in/fade-out image (image provided by client).<br/>
        If multiple welcome pages are required, the final price will be adjusted
        according to page count and design complexity.
      </td>
      <td class="col-price">2,500</td>
    </tr>
    <!-- 其他列一樣依照繁中內容翻成英文即可 -->
  </tbody>
</table>
        `,


        'section.process.dev_table_html': `
<table class="table-schedule">
  <thead>
    <tr>
      <th>專案啟動日期</th>
      <th>預計完成時程</th>
      <th>平均需求（工作天）</th>
      <th>進行項目</th>
      <th>進行細節</th>
      <th>一般需求時間</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2025/3/1</td>
      <td>2025/3/14</td>
      <td>10</td>
      <td>GUI 介面開發</td>
      <td>依照客戶需求開發，開始 GUI 介面。</td>
      <td>1–4 週</td>
    </tr>
    <tr>
      <td>2025/3/1</td>
      <td>2025/3/28</td>
      <td>10</td>
      <td>GUI 介面討論調校</td>
      <td>持續與客戶討論、還有調整 GUI 設計。</td>
      <td>1–4 週</td>
    </tr>
    <tr>
      <td>2025/3/1</td>
      <td>2025/4/25</td>
      <td>20</td>
      <td>功能開發與整合</td>
      <td>
        ▶ 開發目標所需實際功能。<br/>
        ▶ 整合軟體、韌體以及硬體。<br/>
        ▶ 上機測試、實機調較。<br/>
        ▶ 視專案複雜度，可能超過 6 週。
      </td>
      <td>2–6 週</td>
    </tr>
    <tr>
      <td>2025/3/1</td>
      <td>2025/5/2</td>
      <td>5</td>
      <td>整機 Demo 測試、驗收會議</td>
      <td>
        ▶ 依照企劃書約定之項目進行驗收。<br/>
        ▶ 完成驗收雙方在驗收單簽名確認。<br/>
        ▶ 開發方交付打包後 EXE 檔。
      </td>
      <td>1–2 週</td>
    </tr>
    <tr>
      <td>2025/3/1</td>
      <td>2025/5/9</td>
      <td>5</td>
      <td>結案準備</td>
      <td>交付 EXE 檔之後，客戶需於一週內匯款完成結案，並開始計算保固。</td>
      <td>1–2 週</td>
    </tr>
  </tbody>
</table>
`,

      'section.process.warranty_table_html': `
<table class="table-schedule">
  <thead>
    <tr>
      <th>專案完成日期</th>
      <th>預計到期時間</th>
      <th>持續時間（天）</th>
      <th>進行項目</th>
      <th>進行細節</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2025/5/1</td>
      <td>2025/5/31</td>
      <td>30</td>
      <td>產品保固</td>
      <td>
        ▶ 自專案完成驗收起 1 個月內，若發現功能缺失，開發方將協助修正進版。
      </td>
    </tr>
    <tr>
      <td>2025/5/1</td>
      <td>2025/7/30</td>
      <td>90</td>
      <td>客戶服務</td>
      <td>
        ▶ 自專案完成起 3 個月內，提供每個月 3 小時以內線上技術討論支援。<br/>
        ▶ 維護時間若超過時數，維護時間外或是需要 on-site，將另行評估收費。
      </td>
    </tr>
  </tbody>
</table>
`,
      'section.process.eval_intro': '...',
      'section.process.eval_note': '...',
      'section.process.dev_intro': '...',
      'section.process.dev_note': '...',
      'section.process.warranty_intro': '...',
      'section.process.warranty_note': '...',








	},
    'zh-CN': {
      // TODO: 請依需求逐步翻譯為簡體中文，以下為預設先沿用繁中內容。
      'img.pricing_table.src': 'images/pricing_table.png',
      'img.process_overview.src': 'images/process_overview.png',
      'img.process_stage_1.src': 'images/process_stage_1.png',
      'img.process_stage_2.src': 'images/process_stage_2.png',
      'img.process_stage_3.src': 'images/process_stage_3.png',
      'nav.brand': '橘皮客 GUI 设计服务',
      'nav.home': '回首页',
      'page.brand': '橘皮客自动化　Gary Chu',
      'page.footer': '本页内容仅供项目合作与需求沟通使用。若有未尽事宜，欢迎直接与开发方联系讨论。',
      'page.subtitle': '在自动化与数据导向的时代，我们协助您打造稳定、可靠、具弹性的专业 GUI 界面。',
      'page.title': 'GUI 设计服务流程条款',
      'section.about.list1': '韧性（Resilience）：面对项目中不可避免的挑战与突发状况，我们具备足够的耐力与解决问题的能力，确保系统最终能稳定落地。',
      'section.about.list2': '毅力（Perseverance）：我们不断优化模块化架构与开发流程，凭借日积月累的经验与持续投入，为客户带来可靠且高质量的成果。',
      'section.about.list3': '弹性（Flexibility）：每个客户的需求都不同，我们擅长在既有框架上快速调整，提供最适合的方案，无论是 GUI 设计、硬件控制还是系统集成。',
      'section.about.list4': '我们能够提供的服务范围',
      'section.about.list5': '项目的开发流程与时间规划',
      'section.about.list6': '双方应遵守的合作条款',
      'section.about.list7': '各项服务的价值与成本依据',
      'section.about.p1': '在当今自动化与数据导向的时代，人机界面（GUI）已不仅仅是显示数据的工具，             而是客户与系统互动的核心。',
      'section.about.p2': '我们深信，一个好的设计服务不只是完成项目，而是要陪伴客户一起走过挑战，             确保每一步都能带来价值。',
      'section.about.p3': '因此，我们的服务理念建立在三个核心精神上：',
      'section.about.p4': '本文件的目的，是希望客户在项目开始之前，就能清楚了解：',
      'section.about.p5': '透过这样的规划，我们不仅交付一个 GUI，而是交付一个能伴随企业成长、             具备韧性、毅力与弹性的完整解决方案，让客户能安心专注于核心业务。',
      'section.about.title': '关于橘皮客',
      'section.client_checklist.item1': '现有系统或 Demo 影片（若有）：可以是手机拍摄的操作影片，方便我们了解实际流程。',
      'section.client_checklist.item2': '仪器与硬件清单：包含仪器型号、通讯接口（UART / I2C / SPI / GPIB / LAN / USB）等。',
      'section.client_checklist.item3': '通讯协议与指令文件：例如 SCPI 指令表、通讯时序图、厂商提供的 PDF 等。',
      'section.client_checklist.item4': '测试流程或 SOP 文件：说明平时如何操作、量测哪些数据、判断 Pass / Fail 的条件。',
      'section.client_checklist.item5': '报表范例或字段需求：可提供旧报表或 Excel 范本，标注必需字段与格式要求。',
      'section.client_checklist.item6': 'GUI 草图或旧 GUI 截图（若有）：有助于我们理解排版习惯与风格偏好。',
      'section.client_checklist.item7': '预计使用环境与电脑规格：例如 OS 版本、屏幕分辨率、是否在产线环境等。',
      'section.client_checklist.item8': '项目时程与内部里程碑：若您已有内部项目排程，可一并提供，方便我们对齐时程。',
      'section.client_checklist.note': '若以上资料尚未齐备，也欢迎先与我们讨论，我们可以协助一起整理，逐步补齐。项目的规格刚开始很难完全确定，但希望透过这份文件以及后续的邮件、开会讨论可以协助您逐步达成您想要的目标!',
      'section.client_checklist.p1': '为了缩短前期沟通时间并提升项目准确度，建议您在首次会议或需求提出前，             尽可能准备以下资料（可先准备已有的部分，其余可于后续补充）：',
      'section.client_checklist.title': '客户需事先准备的资料',
      'section.contact.client_eng_item1': '技术讨论工程师（负责项目进行中的技术细节讨论）称呼：__________________邮箱：__________________手机或 Line ID：__________________',
      'section.contact.client_eng_mail': '邮箱：__________________',
      'section.contact.client_eng_name': '称呼：__________________',
      'section.contact.client_eng_phone': '手机或 Line ID：__________________',
      'section.contact.client_pm_item1': '项目经理（负责时程、功能与一般沟通）称呼：__________________邮箱：__________________手机或 Line ID：__________________',
      'section.contact.client_pm_mail': '邮箱：__________________',
      'section.contact.client_pm_name': '称呼：__________________',
      'section.contact.client_pm_phone': '手机或 Line ID：__________________',
      'section.contact.client_pm_title': '客户端联络窗口',
      'section.contact.dev_engineer': '技术工程师：Gary Chu',
      'section.contact.dev_line': 'Line ID：tigarychu',
      'section.contact.dev_mail': '邮箱：gary49902210@gmail.com',
      'section.contact.dev_title': '开发方联络窗口（橘皮客自动化）',
      'section.contact.p1': '为了让项目能顺利进行，请客户提供以下两位联络人资讯：',
      'section.contact.title': '联络资料',
      'section.gui_style.item1': '技术型 / 工具型：偏向工程师使用，画面以表格、参数与 Log 为主，重视信息密度与操作效率。',
      'section.gui_style.item2': '仪表板型：使用大型数值、指针表、状态灯号等呈现重点信息，适合监控与展示。',
      'section.gui_style.item3': '简洁扁平风格：按钮与元件设计较为现代、线条简单，适合对外展示或客户端使用。',
      'section.gui_style.item4': '定制混合风格：若您有既有软件或品牌识别（Logo、色系），我们可以依现有风格调整 GUI 视觉。',
      'section.gui_style.note': '若目前尚无特别偏好，也可以先以「清楚、好操作」为主，我们会依常见工程用 GUI 的习惯进行设计。',
      'section.gui_style.p1': '虽然本服务主要以技术功能与稳定性为优先，但界面风格仍会影响使用体验。             您可以先思考希望整体感觉偏向哪一类型，我们会在设计时尽量配合：',
      'section.gui_style.title': 'GUI 设计风格示例',
      'section.pricing.img_caption': '图示：GUI 设计服务价目表（请依实际图片路径替换 src）',
      'section.pricing.note': '※ 若有大型项目、长期合作或需多阶段扩展之情况，欢迎洽谈项目制报价。',
      'section.pricing.p1': '各功能项目请参考下方价目表示意图。实际费用可能会依照             项目复杂度、定制程度及整体规划而有所调整。',
      'section.pricing.p2': '每一个项目方案，默认皆包含项目完成后 3 个月内，每月 3 小时的客户服务（在线讨论／技术咨询）。',
      'section.pricing.title': '价目表',
      'section.process.detail_flow_p1': '更细部的阶段性流程，将依下列示意图说明。若您已有内部标准开发流程，             也可以在双方讨论后进行整合。',
      'section.process.detail_flow_title': '阶段性细节流程',
      'section.process.img_main_caption': '图示：项目主要开发流程（请依实际图片路径替换 src）',
      'section.process.img_stage1_caption': '图示：项目阶段性流程（第一部分）',
      'section.process.img_stage2_caption': '图示：项目阶段性流程（第二部分）',
      'section.process.img_stage3_caption': '图示：项目阶段性流程（第三部分）',
      'section.process.p1': '企划进行时，开发方与客户需要共同配合，并留意以下主要流程。',
      'section.process.rough_timeline_note': '实际时程会依项目范围、技术难度及资源配合情况调整，将于项目计划书中明确载明。',
      'section.process.title': '项目开发流程',
      'section.req_guide.end_note': '以上内容不需要一次完成，只要先提供大致方向即可。             我们会在需求访谈与会议中协助补充细节，并整理为正式的项目计划书。',
      'section.req_guide.flow_item1': '开启程序 → 选择 COM Port → 按下「连线」',
      'section.req_guide.flow_item2': '载入测试条件档 → 按下「开始测试」',
      'section.req_guide.flow_item3': '等测试完成 → 显示结果 → 汇出报表到指定文件夹',
      'section.req_guide.flow_note': '若有多种情境（例如：工程模式 / 操作员模式），也可以分别描述，我们会协助拆分为不同页面或权限。',
      'section.req_guide.flow_p1': '请以「使用者实际操作」的角度，简单描述一个完整流程。例如：',
      'section.req_guide.flow_title': '2. 操作流程（使用步骤）',
      'section.req_guide.gui_layout_item1': '主窗口大致尺寸（例如：1280×720 或全屏幕）',
      'section.req_guide.gui_layout_item2': '按钮、输入字段、列表、图表等大致位置',
      'section.req_guide.gui_layout_item3': '是否需要多分页（Tab）或多个对话框窗口',
      'section.req_guide.gui_layout_p1': '您可以使用简单手绘、PowerPoint、Excel 或任何工具，画出想象中的画面配置，             并标注大致位置与功能，例如：「左侧为测试设定区、右侧为实时曲线图、下方为 Log 区」。',
      'section.req_guide.gui_layout_title': '1. GUI 版面与画面配置',
      'section.req_guide.hw_item1': '仪器或搭配硬件型号与厂牌（例如：电源供应器、DMM、示波器、Pico 等）',
      'section.req_guide.hw_item2': '通讯接口：UART / I2C / SPI / GPIB / LAN / USB 等',
      'section.req_guide.hw_item3': '是否有现成范例程序（例如：Python、LabVIEW、C）',
      'section.req_guide.hw_item4': '是否能提供通讯协议、指令表或 SCPI 命令文件',
      'section.req_guide.hw_p1': '若 GUI 需要控制仪器、测试板或其他硬件，请尽量提供以下信息：',
      'section.req_guide.hw_title': '3. 仪器／硬件控制需求',
      'section.req_guide.intro': '为了让我们能更精准估算工时与成本，并减少后续反复修改，             建议您在提出需求时，尽量依照下列项目进行描述。             不需要一次写得非常完整，可以先用简单条列，我们会在邮件或会议中协助补充与厘清。',
      'section.req_guide.report_item1': '是否需要 Excel 报表（请提供范例文件或字段名称）',
      'section.req_guide.report_item2': '是否需要 CSV / JSON 等机器可读格式',
      'section.req_guide.report_item3': '是否需支持多次量测结果比对或合并报告',
      'section.req_guide.report_p1': '请简单说明您希望最后的测试结果以什么形式呈现，例如：',
      'section.req_guide.report_title': '4. 报表与资料输出需求',
      'section.req_guide.title': '客户需求填写指引',
      'section.req_guide.user_item1': '主要使用者类型：研发 / 量产 / 实验室 / 教学 等',
      'section.req_guide.user_item2': '是否需要权限区分（例如：一般使用者 vs 管理者）',
      'section.req_guide.user_item3': '预期每天或每周使用频率',
      'section.req_guide.user_p1': '不同使用者（研发工程师、产线操作员、FAE、客户端工程师）对界面与功能的需求会不同。             若您能提供预期使用族群与环境，我们可以在设计上更贴近实际需求。',
      'section.req_guide.user_title': '5. 使用者族群与使用情境',
      'section.scope.func1': 'GUI 主窗口设计、菜单栏（menubar）、对话框',
      'section.scope.func2': '资料显示（表格、图表、实时数据）',
      'section.scope.func3': '仪器／硬件控制接口（UART、I2C、SPI、GPIB）',
      'section.scope.func4': '报告输出（Excel、CSV、自动化格式）',
      'section.scope.func_title': '功能性范围',
      'section.scope.nonfunc1': '不包含硬件现场调试（如需，将另行报价）',
      'section.scope.nonfunc2': '不包含第三方商业授权软件费用（例如专业版工具授权等）',
      'section.scope.nonfunc_title': '非功能性范围（排除事项）',
      'section.scope.title': '服务范围',
      'section.terms.accept_p1': '当项目完成时，开发方将与客户于会议中进行测试与验收。             若项目涉及实体硬件，则需安排实体会议或现场测试。',
      'section.terms.accept_p2': '验收将依照订金前双方确认之项目计划书与验收项目进行。             开发方应针对功能缺失进行修正，但不包含 GUI 额外美化调整。             若此阶段客户提出新的需求，将视为新项目或新阶段内容，需另行评估与报价。',
      'section.terms.accept_p3': '项目成果交付后，客户应于一周内支付尾款，以完成结案程序。             结案后，若遇到非原项目计划中功能缺失之修改需求，将视为新项目需求。',
      'section.terms.accept_title': '六、测试验收与成果交付',
      'section.terms.change_list1': '小幅调整（通常不另外计价）：文案修正、字段名称调整、颜色或字体微调等，不影响整体架构者。',
      'section.terms.change_list2': '中度变更（需评估追加费用）：新增按钮与对应功能、新增报表格式、增加与新仪器的对接等。',
      'section.terms.change_list3': '重大变更（需重新估价或开新项目）：主要流程改写、测试逻辑全面调整、操作系统平台改变等。',
      'section.terms.change_note': '通常在初版 GUI 确认后，若版面或流程有大幅变更需求，我们会先与您说明影响范围与工时，             经双方同意后再进行调整。',
      'section.terms.change_p1': '为避免项目过程中因需求持续变动而导致时程与成本大幅增加，             双方将以「项目计划书」作为主要依据，必要时再透过「变更单」进行调整。',
      'section.terms.change_title': '三、变更需求与加价原则',
      'section.terms.need_eval_list1': '提供 Demo 机与示范操作，并向开发方说明实际需求。',
      'section.terms.need_eval_list2': '由开发方进行 Log 抓取，评估接口协议与实作可行性。',
      'section.terms.need_eval_list3': '开发方与客户技术工程师进行技术讨论，确认需求细节与可行性。',
      'section.terms.need_eval_p1': '开发方将依照客户提供的相关资料，分析技术可行性、估算开发工时与成本，             并提出所需之测试仪器与相关资源，请客户评估是否能提供开发所需条件。             若无法提供，双方将另行讨论替代方案与调整方式。',
      'section.terms.need_eval_p2': '对于已有范例程序或明确定制目标的项目，客户需在固件或驱动开发前，             提供完整可测试之硬件与接线信息，以确保能开发出功能相同或可正常对接之系统。             主要需配合事项如下：',
      'section.terms.need_eval_p3': '根据项目复杂程度，如有必要，可行性评估阶段可能需收取评估费，将于事前与客户说明。',
      'section.terms.need_eval_title': '一、需求讨论与可行性评估',
      'section.terms.plan_update_p1': '开发方应于收取订金前提供项目计划书，             内容包括：对项目需求功能的理解、预计验收项目与验收方式。             此文件将作为项目完成时之验收依据，双方皆不得单方面修改项目目标与验收项目。',
      'section.terms.plan_update_p2': '项目启动后，每2～3 周开发方将向客户进行进度汇报与已完成功能之展示，             以在线会议为主，并将相关资料上传至云端硬盘供客户参考。             客户须于会议中协助确认功能是否符合需求，以避免方向偏差造成交期延误。',
      'section.terms.plan_update_p3': 'GUI（使用者界面）设计将于开发过程中提供初稿给客户审阅与确认。             完成确认后，除项目计划书原列之功能必要调整外，将不再进行额外美化或大幅版面修改。',
      'section.terms.plan_update_p4': '客户应尽量于前期明确提供 GUI 版面初始设计与后续调整需求，             以降低来回修正次数。项目提供3 次免费版面修改，             超过 3 次者，将以每次新台币 2,000 元计入尾款。             若为开发方遗漏之需求，则不计入此修改次数。',
      'section.terms.plan_update_p5': '开发方与客户皆需指定一位项目经理与技术沟通窗口（可为同一人），             遇到非预期项目调整或技术讨论需求时，得以迅速联系并维持项目顺利进行。',
      'section.terms.plan_update_title': '五、开发规划与进度更新',
      'section.terms.quote_deposit_p1': '确认需求并完成可行性评估后，开发方将依结果进行项目时程规划与报价。             双方确认项目目标、报价与时程无误并达成共识后，             客户需支付20% 订金，以确认项目计划书内所载之目标与范围。',
      'section.terms.quote_deposit_p2': '项目启动后开始计算时程。若后续有新增或重大修改需求，             需针对新增项目另行估价。若遇开发方无法完成之情况，             将与客户讨论调整计划与报价方式。',
      'section.terms.quote_deposit_p3': '若客户需开发方提供原始码，将依项目大小与难度另行评估费用，             并提供具详细注解之程序代码。',
      'section.terms.quote_deposit_p4': '订金收据将以开发方银行账户记录截图方式回传给客户留存。',
      'section.terms.quote_deposit_title': '二、报价与订金',
      'section.terms.terminate_list1': '若因开发方遇不可预期因素（例如评估错误等）需中止项目，             客户可选择要求全额退还订金，或接收已完成之部分成果并由双方协议处理方式。',
      'section.terms.terminate_list2': '若因客户遇不可预期因素需中止项目，开发方得依照已执行之工作项目与进度进行收费。',
      'section.terms.terminate_title': '四、中止条款与责任归属',
      'section.terms.title': '合作条款细节',
      'section.terms.warranty_p1': '项目成果交付后，开发方将提供1 个月功能保固，             期间若发现项目功能缺失，可免费协助修正。',
      'section.terms.warranty_p2': '此外，项目结案后3 个月内，             每月提供最多3 小时的在线讨论与售后技术咨询服务。             若超过此时数，或需开发方到场（on-site）支持，将另行评估费用。',
      'section.terms.warranty_title': '七、后续维护、服务与保固',
      'section.use_cases.item1': '电脑操作系统：Windows 11 24H2',
      'section.use_cases.item2': '报告输入／输出工具：Excel 2019 64-bit',
      'section.use_cases.item3': '必要系统驱动程序：NI MAX（NI VISA 488.2）USB-RS-232 相关驱动',
      'section.use_cases.note': '※ 若系统需支持其他版本操作系统或额外软件环境，请于需求讨论阶段主动说明。※ 必要系统驱动程序部分若有搭配其他的固件或硬件，可能增加额外使用限制',
      'section.use_cases.p1': '本服务主要针对符合下列开发规格的软硬件系统，             其余操作环境若有需求，欢迎另行讨论可行性。',
      'section.use_cases.subitem1': 'NI MAX（NI VISA 488.2）',
      'section.use_cases.subitem2': 'USB-RS-232 相关驱动',
      'section.use_cases.title': '应用场景',
      'toc.about': '关于橘皮客',
      'toc.client_checklist': '客户需事先准备的资料',
      'toc.contact': '联络资料',
      'toc.gui_style': 'GUI 设计风格示例',
      'toc.pricing': '价目表',
      'toc.process': '项目开发流程',
      'toc.requirements_guide': '客户需求填写指引',
      'toc.scope': '服务范围',
      'toc.terms': '合作条款细节',
      'toc.title': '目录',
      'toc.use_cases': '应用场景',


      'section.pricing.table_html': `
<table class="pricing-table">
  <thead>
    <tr>
      <th>编号</th>
      <th>类别</th>
      <th>功能名称</th>
      <th>功能说明</th>
      <th>功能底价 (NT$)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="col-no">1</td>
      <td class="col-cat">Software</td>
      <td class="col-name">GUI-Welcome 画面</td>
      <td>
        用于显示公司资讯或其他结案画面。<br/>
        默认为显示图片后淡出（需客户提供图片）。<br/>
        若有多页欢迎画面，实际费用依页数与设计复杂度另估。
      </td>
      <td class="col-price">2,500</td>
    </tr>
    <!-- 其餘列同繁中邏輯，將文字改成簡體即可 -->
  </tbody>
</table>
        `,

        'section.process.eval_table_html': `
<table class="table-schedule">
  <thead>
    <tr>
      <th>專案受理日期</th>
      <th>預計完成時程</th>
      <th>持續時間 (工作天)</th>
      <th>進行項目</th>
      <th>進行細節</th>
      <th>一般需求時間</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2025/1/1</td>
      <td>2025/1/15</td>
      <td>10</td>
      <td>可行性評估</td>
      <td>
        根據客戶需求討論與提供的資料進行評估。<br/>
        列出需客戶提供的必要開發資源。<br/>
        必要時評估可能需要收取之評估費用。
      </td>
      <td>約 1–4 週</td>
    </tr>
    <!-- 第二列 2025/1/29 開發規劃 同樣方式填入 -->
  </tbody>
</table>
        `,

        'section.process.eval_intro': '...',
        'section.process.eval_note': '...',
        'section.process.dev_intro': '...',
        'section.process.dev_note': '...',
        'section.process.warranty_intro': '...',
        'section.process.warranty_note': '...',

    }
  };

  const DEFAULT_LANG = 'zh-TW';  // 預設語系

  function getCurrentLanguage() {
    try {
      const saved = localStorage.getItem('lang');
      if (saved && GUI_TRANSLATIONS[saved]) return saved;

      const nav = (navigator.language || navigator.userLanguage || '').trim();
      if (GUI_TRANSLATIONS[nav]) return nav;
      if (nav.startsWith('zh')) return 'zh-TW';
      return DEFAULT_LANG;
    } catch (e) {
      console.error('getCurrentLanguage error:', e);
      return DEFAULT_LANG;
    }
  }

  function applyTranslations(root) {
    try {
      const lang = getCurrentLanguage();
      const dict = GUI_TRANSLATIONS[lang] || {}
      const fallback = GUI_TRANSLATIONS[DEFAULT_LANG] || {};

      const nodes = (root || document).querySelectorAll('[data-i18n]');
      nodes.forEach(el => {
        try {
          const key = el.getAttribute('data-i18n');
          const attr = el.getAttribute('data-i18n-attr');

          let val = undefined;
          if (Object.prototype.hasOwnProperty.call(dict, key)) {
            val = dict[key];
          } else if (Object.prototype.hasOwnProperty.call(fallback, key)) {
            val = fallback[key];
          }

          if (val == null) return;

          if (attr) {
            el.setAttribute(attr, val);
          } else {
            el.innerHTML = val;
          }
        } catch (inner) {
          console.error('applyTranslations node error:', inner);
        }
      });

      document.documentElement.setAttribute('lang', lang);

    } catch (e) {
      console.error('applyTranslations error:', e);
    }
  }

  function setLanguage(lang) {
    try {
      if (!GUI_TRANSLATIONS[lang]) lang = DEFAULT_LANG;
      localStorage.setItem('lang', lang);
      applyTranslations(document);

      const sel = document.getElementById('langSelect');
      if (sel) sel.value = lang;
    } catch (e) {
      console.error('setLanguage error:', e);
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    try {
      const lang = getCurrentLanguage();
      const sel = document.getElementById('langSelect');
      if (sel) {
        sel.value = lang;
        sel.addEventListener('change', function(ev) {
          setLanguage(ev.target.value);
        });
      }
      applyTranslations(document);
    } catch (e) {
      console.error('ts_cs init error:', e);
    }
  });

  // 將函數掛到全域，方便日後除錯或手動切換語系
  window.guiI18n = {
    getCurrentLanguage,
    setLanguage,
    applyTranslations,
    GUI_TRANSLATIONS
  };
})();
