// news.js


/*
'''Purpose:
Provide i18n-safe field accessor for news data (backward-compatible).
Variables:
- getCurrentLanguage(): from i18n.js if available; fallback <html lang> or "en"
Acceptable Range:
- field can be string or { "en": "...", "zh-TW": "...", "zh-CN": "..." }
'''
*/
function __getCurrentLangSafe(){
  try{
    if (typeof getCurrentLanguage === 'function') return getCurrentLanguage();
    const h = document.documentElement.getAttribute('lang');
    return h || "en";
  }catch(e){
    console.error('lang detect error:', e);
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
    console.error('tField error:', e);
    return field; // end_of_tField
  }
}

const news = {
  news1: {
    title: {
      "en": "g-Pico is ready to launch!",
      "zh-TW": "g-Pico 已經準備好要加入市場！",
      "zh-CN": "g-Pico 已经准备好加入市场！",
    },
    subtitle: {
      "en": "The First Step in the Automation Blueprint",
      "zh-TW": "自動化版圖第一步",
      "zh-CN": "自动化版图第一步",
    },
    subtitleColor: "#007bff",
    content: {
      "en": `

<p>After three years of dedicated preparation, we are
incredibly excited to officially launch the first
g-Pico product!</p>

<p>As one of the creators passionate about engineering,
we deeply understand that repetitive tasks often consume
significant time in daily life and work, which is why we
chose to invest in the development of an automated
testing system.</p>

<p>We started from scratch to learn Python and explore
the potential of the Raspberry Pi Pico. Through continuous
research and hands-on development, we gradually built
the prototype of the g-Pico system. Today, it is finally
ready, taking its first step into automation applications
with the debut of the sensor control interface.</p>

<p>Beyond being confident in the future, we look forward
to sharing the convenience and joy that automation brings.
Our goal is to make technology a powerful assistant in
everyone's life, simplifying tedious tasks through
comprehensive solutions—and this is just the beginning!</p>

<p>We sincerely thank everyone who has supported us
throughout this journey, as well as the inspiration
from countless open-source communities and online
resources. g-Pico will continue to move forward,
striving to make life better through the power of
technology.</p>

      `,
      "zh-TW": `

<p>經過三年的精心籌備，g-Pico 終於正式推出第一款產品，
我們感到無比興奮！</p>

<p>身為熱愛工程的創作者之一，我們深知日常的亨活與工作中常常
有重複性任務佔據大量時間，因此我們選擇投入自動化測試系統的開發</p>

<p>我們從零開始學習 Python 並探索 Raspberry Pi Pico 的潛能。
透過持續的研究與實作，逐步打造出 g-Pico 系統雛形。如今，它終於
準備就緒，以感測器控制介面為起點，邁出自動化應用的第一步。</p>

<p>除了對未來充滿信心，也期待與更多人分享自動化帶來的便利與樂趣。
我們的目標，是讓科技成為每個人生活中的助力，藉由完善的解決方案，
讓繁瑣的任務變得更輕鬆——而這，僅僅是個開始！</p>

<p>衷心感謝所有在這段旅程中支持我們的人，以及無數開源社群與
線上資源的啟發。g-Pico 將持續前行，努力用科技的力量，
讓生活變得更美好。</p>

      `,
      "zh-CN": `

<p>经过三年的精心筹备，g-Pico 终于正式推出了第一款产品，
我们感到无比兴奋！</p>

<p>作为热爱工程的创作者之一，我们深知在日常生活与工作中，
重复性任务常常占据大量时间，因此我们选择了投入自动化测试系统的开发。</p>

<p>我们从零开始学习 Python 并探索 Raspberry Pi Pico 的潜能。
通过持续的研究与实践，逐步打造出了 g-Pico 系统的雏形。如今，
它终于准备就绪，以传感器控制接口为起点，迈出了自动化应用的第一步。</p>

<p>除了对未来充满信心，我们也期待与更多人分享自动化带来的便利与乐趣。
我们的目标是让科技成为每个人生活中的助力，通过完善的解决方案，
让繁琐的任务变得更轻松——而这，仅仅是一个开始！</p>

<p>衷心感谢所有在这段旅程中支持我们的人，以及无数开源社区与线上
资源的启发。g-Pico 将持续前行，努力用科技的力量，让生活变得更美好。</p>

      `
    },
    image: "assets/pic/party_time_pico_release.webp"
  },



  news2: {
    title: {
      "en": "Our Origin Story: The g-Pico Automation Philosophy",
      "zh-TW": "g-Pico 創業故事：解放雙手，成就工程核心",
      "zh-CN": "g-Pico 创业故事：解放双手，成就工程核心",
    },
    subtitle: {
      "en": "From Engineer to Founder: Building the All-in-One Automation Base",
      "zh-TW": "從工程師的痛點出發，打造通用且全面整合的解決方案",
      "zh-CN": "从工程师的痛点出发，打造通用且全面整合的解决方案",
    },
    subtitleColor: "#cc5200", // 橙色系，強調創業熱情
    content: {
      "zh-TW": `
<p><strong>💡 緣起：從工程師的痛點到自動化的核心領悟</strong></p>
<p>我是 g-Pico 的創辦人，一名來自臺灣的工程師。我的職業生涯起步於2016從德州儀器（TI）開始，擔任了三年的 FAE（現場應用工程師），隨後轉任臺灣 IC 設計公司的系統與應用工程師。在這些高強度、高複雜度的工作中，我深刻體悟到：<strong>「數據」是驅動工程進展與決策的核心要素之一</strong>。</p>

<p>有效的工程決策，從來都不能憑藉感覺。它仰賴於有系統地蒐集、整理、分析數據，並根據精準的量化結果不斷修正，以達成最終的理想目標。</p>

<p>這讓我意識到<strong>自動化</strong>在現代工程中的不可或缺，它不再是錦上添花，而是<strong>提升競爭力的關鍵</strong>。自動化帶來的效益是驚人的：</p>
<ul>
<li><strong>效率與一致性：</strong> 大幅提升實驗速度，並確保實驗手法的高度一致性，消除人為誤差。</li>
<li><strong>覆蓋率與質量：</strong> 擴大實驗覆蓋範圍，獲取更高質量、更全面的數據集。</li>
<li><strong>解放工程師：</strong> 將專業人才從繁瑣、重複、耗時的手動操作中解放出來，使我們得以將寶貴的時間和精力，<strong>專注於數據的深度分析、結果的解讀，以及技術的創新突破</strong>。</li>
</ul>

<p><strong>🚀 版圖：g-Pico 的全方位自動化藍圖</strong></p>
<p>基於這個信念，我決定親手打造一個完整的自動化系統，這就是 <strong>g-Pico</strong> 誕生的原因。g-Pico 的發展目標，是建立一個<strong>涵蓋工程工作流全程</strong>的全面性解決方案：</p>
<ol>
<li><strong>數據基礎：</strong> 開發穩定的硬體韌體，實現從治具操作到自動化實驗的精準控制，奠定<strong>資料蒐集與測試驗證</strong>的堅實基礎。</li>
<li><strong>智慧處理：</strong> 實現系統化的數據彙整、清洗、以及結構化儲存，完成高效的<strong>數據整理與分析</strong>。</li>
<li><strong>創新未來：</strong> 展望未來，我們將結合目前的 <strong>AI 技術和機器學習</strong>，利用我們建立的系統化資料庫進行更深層次的數據分析與應用，為產業帶來新的可能性。</li>
</ol>
<p>我們的戰略第一步，是從最基礎、最核心的<strong>感測器控制介面</strong>切入，逐步建立一個通用且強大的自動化基礎設施。</p>

<p><strong>🌟 願景：普及自動化，追求更高的人生意義</strong></p>
<p>g-Pico 的核心願景是：<strong>提供人人用得起的、全面整合的自動化解決方案。</strong></p>

<p>我深信，好的工具不應該只屬於少數擁有高深編程能力的專家。我的目標是開發一套<strong>即使是初學者或不懂程式碼的人，也能夠透過直覺的圖形化 GUI 輕鬆操作的系統</strong>。我們希望將這套系統推廣給兩類使用者：</p>
<ul>
<li>有測試需求的工程師和使用者。</li>
<li><strong>擁有好點子，但欠缺工程底子設計資料蒐集或測試系統的創新者。</strong></li>
</ul>
<p>自動化的意義，不僅僅是提升效率；它更是<strong>賦予人類更多自主時間的工具</strong>。我們希望幫助大家：</p>
<ul>
<li><strong>解放雙手，成就卓越：</strong> 將精力投入到數據的分析理解、策略制定，以及更具創造性的高價值工作。</li>
<li><strong>追尋熱情，體現價值：</strong> 讓被節省下來的時間，得以用於追求自己的熱情、探索興趣，以及尋找其他更有意義的人生價值。</li>
</ul>
<p>這條整合軟硬體的道路上，挑戰與困難如影隨形。但我始終懷抱著一份簡單的期盼：<strong>親手創造出真正好用、能為人帶來幫助的工具。</strong> 我期待能與更多志同道合的朋友一起，共同推動自動化普及，<strong>創造一個更高效、更美好、更具人性價值的未來。</strong></p>
      `,
      "en": `
<p><strong>💡 Origin: From an Engineer's Pain Points to the Core of Automation</strong></p>
<p>I am the founder of g-Pico, an engineer from Taiwan. My career started from 2016 at Texas Instruments (TI) as an FAE for three years, and I then transitioned to a system and application engineer role at a local IC design company. Through these high-intensity and complex tasks, I realized a core truth: <strong>"Data" is one of the key elements driving engineering progress and decision-making</strong>.</p>

<p>Effective engineering decisions are never based on mere feeling. They rely on systematically collecting, organizing, and analyzing data, and continuously adjusting based on precise quantitative results to achieve the ideal goal.</p>

<p>This led me to recognize the indispensable role of <strong>automation</strong> in modern engineering. It is no longer a luxury but a <strong>key to enhancing competitiveness</strong>. The benefits of automation are tremendous:</p>
<ul>
<li><strong>Efficiency and Consistency:</strong> Significantly increases experiment speed and ensures high consistency in experimental methods, eliminating human error.</li>
<li><strong>Coverage and Quality:</strong> Expands the scope of experimental coverage, obtaining higher quality and more comprehensive datasets.</li>
<li><strong>Engineer Liberation:</strong> Frees up professionals from tedious, repetitive manual tasks, allowing us to dedicate our valuable time and energy to <strong>in-depth data analysis, result interpretation, and technological innovation</strong>.</li>
</ul>

<p><strong>🚀 Blueprint: g-Pico's Comprehensive Automation Map</strong></p>
<p>Based on this belief, I decided to personally build a complete automation system, which is the reason for <strong>g-Pico</strong>'s inception. g-Pico's development goal is to establish a comprehensive solution that <strong>covers the entire engineering workflow</strong>:</p>
<ol>
<li><strong>Data Foundation:</strong> Develop stable hardware and firmware to achieve precise control from fixture operation to automated experiments, laying a solid foundation for <strong>data collection and testing verification</strong>.</li>
<li><strong>Intelligent Processing:</strong> Implement systematic data consolidation, cleaning, and structured storage, achieving efficient <strong>data organization and analysis</strong>.</li>
<li><strong>Innovative Future:</strong> Looking ahead, we will combine current <strong>AI technology and machine learning</strong>, utilizing our structured database for deeper data analysis and applications, bringing new possibilities to the industry.</li>
</ol>
<p>Our strategic first step is to start with the most fundamental and core <strong>sensor control interface</strong>, gradually establishing a versatile and powerful automation infrastructure.</p>

<p><strong>🌟 Vision: Popularizing Automation and Pursuing a Higher Purpose in Life</strong></p>
<p>g-Pico's core vision is: <strong>to provide an affordable, fully integrated automation solution accessible to everyone.</strong></p>

<p>I strongly believe that great tools should not be exclusive to a few experts with deep programming skills. My goal is to develop a system that <strong>even beginners or those unfamiliar with coding can easily operate through an intuitive graphical GUI</strong>. We aim to promote this system to two main user groups:</p>
<ul>
<li>Engineers and users with testing requirements.</li>
<li><strong>Innovators with great ideas but lacking the engineering background to design data collection or testing systems.</strong></li>
</ul>
<p>The significance of automation goes beyond just efficiency; it is a <strong>tool for human self-liberation</strong>. We hope to help everyone:</p>
<ul>
<li><strong>Free Hands, Achieve Excellence:</strong> Devote energy to data analysis, strategic planning, and more creative, high-value work.</li>
<li><strong>Pursue Passion, Realize Value:</strong> Allow the time saved to be used for pursuing personal passions, exploring interests, and finding other meaningful purposes in life.</li>
</ul>
<p>Throughout this journey of integrating software and hardware, challenges and difficulties are constants. Yet, I always hold a simple aspiration: <strong>to personally create useful tools that truly help people.</strong> I look forward to working with more like-minded friends to promote the popularization of automation and <strong>create a more efficient, better, and more human-centered future together.</strong></p>
      `,
      "zh-CN": `
<p><strong>💡 缘起：从工程师的痛点到自动化的核心领悟</strong></p>
<p>我是 g-Pico 的创始人，一名来自台湾的工程师。我的职业生涯起步于2016从德州仪器（TI）开始，担任了三年的 FAE（现场应用工程师），随后转任台湾 IC 设计公司的系统与应用工程师。在这些高强度、高复杂度的工作中，我深刻体悟到：<strong>“数据”是驱动工程进展与决策的核心要素之一</strong>。</p>

<p>有效的工程决策，从来都不能凭借感觉。它仰赖于有系统地搜集、整理、分析数据，并根据精准的量化结果不断修正，以达成最终的理想目标。</p>

<p>这让我意识到了<strong>自动化</strong>在现代工程中的不可或缺，它不再是锦上添花，而是<strong>提升竞争力的关键</strong>。自动化带来的效益是惊人的：</p>
<ul>
<li><strong>效率与一致性：</strong> 大幅提升实验速度，并确保实验手法的高度一致性，消除人为误差。</li>
<li><strong>覆盖率与质量：</strong> 扩大实验覆盖范围，获取更高质量、更全面的数据集。</li>
<li><strong>解放工程师：</strong> 将专业人才从繁琐、重复、耗时的手动操作中解放出来，使我们得以将宝贵的时间和精力，<strong>专注于数据的深度分析、结果的解读，以及技术的创新突破</strong>。</li>
</ul>

<p><strong>🚀 版图：g-Pico 的全方位自动化蓝图</strong></p>
<p>基于这个信念，我决定亲手打造一个完整的自动化系统，这便是 <strong>g-Pico</strong> 诞生的原因。g-Pico 的发展目标，是建立一个<strong>涵盖工程工作流全程</strong>的全面性解决方案：</p>
<ol>
<li><strong>数据基础：</strong> 开发稳定的硬件固件，实现从夹具操作到自动化实验的精准控制，奠定<strong>资料搜集与测试验证</strong>的坚实基础。</li>
<li><strong>智慧处理：</strong> 实现系统化的数据汇整、清洗、以及结构化存储，完成高效的<strong>数据整理与分析</strong>。</li>
<li><strong>创新未来：</strong> 展望未来，我们将结合目前的 <strong>AI 技术和机器学习</strong>，利用我们建立的系统化资料库进行更深层次的数据分析与应用，为产业带来新的可能性。</li>
</ol>
<p>我们的战略第一步，是从最基础、最核心的<strong>传感器控制接口</strong>切入，逐步建立一个通用且强大的自动化基础设施。</p>

<p><strong>🌟 愿景：普及自动化，追求更高的人生意义</strong></p>
<p>g-Pico 的核心愿景是：<strong>提供人人用得起的、全面整合的自动化解决方案。</strong></p>

<p>我深信，好的工具不应该只属于少数拥有高深编程能力的专家。我的目标是开发一套<strong>即使是初学者或不懂代码的人，也能够通过直觉的图形化 GUI 轻松操作的系统</strong>。我们希望将这套系统推广给两类用户：</p>
<ul>
<li>有测试需求的工程师和用户。</li>
<li><strong>拥有好点子，但欠缺工程底子设计资料搜集或测试系统的创新者。</strong></li>
</ul>
<p>自动化的意义，不仅仅是提升效率；它更是<strong>赋予人类更多自主时间的工具</strong>。我们希望帮助大家：</p>
<ul>
<li><strong>解放双手，成就卓越：</strong> 将精力投入到数据的分析理解、策略制定，以及更具创造性的高价值工作。</li>
<li><strong>追寻热情，体现价值：</strong> 让被节省下来的时间，得以用于追求自己的热情、探索兴趣，以及寻找其他更有意义的人生价值。</li>
</ul>
<p>这条整合软硬件的道路上，挑战与困难如影随形。但我始终怀抱一份简单的期盼：<strong>亲手创造出真正好用、能为人带来帮助的工具。</strong> 我期待能与更多志同道合的朋友一起，共同推动自动化普及，<strong>创造一个更高效、更美好、更具人性价值的未来。</strong></p>
      `
    },
    image: "assets/pic/party_time_pico_release.webp" // 建議使用一個與創業故事相關的圖片
  },














  // TODO: news2 也把 title/subtitle/content 改成 {en, zh-TW, zh-CN} 物件
  // 參考你檔案中已經有的中/英段落，直接切成多語字段即可
};
































































/**

const news = {
    news1: {
        title: "g-Pico finally getting ready for the market!",
        subtitle: "Finally, g-Pico is Here!",
        subtitleColor: "#007bff", // 設置副標題顏色，例如藍色
        content: `
            <p>After two years of cooking, g-Pico has finally launched, and we couldn't be more excited!</p>
            <p>As engineers in Taiwan, we've often found ourselves bogged down by routine tasks, searching for ways to improve
            efficiency. Through data collection and analysis in our daily work, we began to truly appreciate the power
            of automation. This sparked a passion in us to develop and promote automated solutions that could make
            life easier for everyone.</p>

            <p>Starting with no knowledge of Python, we've spent the past two
             years working relentlessly to build and refine the g-Pico system.
              Today, we're thrilled to see it finally ready to launch, opening
              doors to new possibilities in automation.
            </p>

            <p>We are filled with hope for the future and eager to share the
            benefits of automation with others. Our goal is to help everyone
            lead more efficient and fulfilling lives through technology. This
            is just the beginning!
            </p>

            <p>We are deeply grateful to everyone who has helped us along the
            way, as well as the online resources that supported us. We will try
            our best to make people's lives better.
            </p>
        `,
        image: "assets/pic/party_time_pico_release.webp"
    },
    news2: {
        title: "Story about g-Pico",
        subtitle: "This is how everyting start~",
        subtitleColor: "#0fcccc", // 設置副標題顏色，例如橙色 #ff5733

        // 在這裡，<span> 裡的內容會被浮動到右邊。這種方式簡單直接，適合短文本的右對齊。
        // <p>We are excited to announce our new partnership... <span style="float: right;">- The Team</span></p>

        // 如果你想讓右對齊的內容單獨占用一行，可以用 <div> 並設置 text-align: right;。這種方式可以讓文字更具獨立性，不會和段落的其他部分擠在一起：
        //<p>We are excited to announce our new partnership...</p>
        //<div style="text-align: right;">- The Team</div>


        content: `
            <p>我是一名台灣的工程師，曾經在德州儀器擔任過3年的FAE，現在則是在台灣
            的IC設計公司擔任系統與應用工程師。隨著經驗的累積，我逐漸意識到自動
            化在工作中的重要性。自動化不僅能提升實驗速度，確保實驗手法的一致性，還
            能增加實驗的覆蓋範圍。更重要的是，它能解放工程師的雙手，讓我們能專注於
            數據的分析。自動化的數據整理也對分析工作有極大的幫助。</p>
            <br>

            <p>因此，我決定學習並改良自動化技術，整合自動化的測試驗證系統，並搭配高效
            的自動化數據整理系統，將數據系統化地整理，方便後續分析。我逐步開發了
            g-Pico的自動化全方位解決方案，從一般的治具操作，到自動化實驗、自動化
            數據整理與分析，都進行了整合。</p>
            <br>

            <p>我的目標是開發出一套即使是初學者或不懂程式的人也能夠透過圖形化GUI
            來操作的系統，並將這套系統推廣給有類似需求的工程師或使用者們。希望能
            幫助大家解放雙手，把時間花在更重要的事情上，除了對數據的分析和理解，
            更可以追求自己的熱情，以及尋找其他的人生意義。</p>
            <br>

            <p>展望未來，我希望讓更多人了解自動化帶來的幫助，並願意使用它來改善
            生活。我計畫藉由系統化地蒐集和整理資料，搭配目前的AI技術，利用機器
            學習進行進階的數據分析和應用。我相信，這不僅能提升工作效率，還能為
            產業帶來新的可能性。</p>
            <br>

            <p>這一路走來，雖然在整合軟硬體的過程中時常遇到困難，但我總期待能
            從自己的手創造出讓人覺得好用的工具。我期待著與更多志同道合的朋友
            一起，共同創造一個更高效、更美好的未來。</p>
            <br>
            </p><span style="float: right;"> Gary Chu 2024/10/04 </span></p>
            <br>
            <br>
            <br>
            <br>



            <p>I am an engineer in Taiwan. I previously worked as an FAE
             at Texas Instruments for three years, and now I serve as a
             system and application engineer at a local IC design company
              in Taiwan. As my experience accumulated, I gradually realized
               the importance of automation in work. Automation not only
               enhances experiment speed and ensures consistency in
               experimental methods but also increases the coverage of
               experimental conditions. More importantly, it frees engineers'
               hands, allowing us to focus on data analysis. Automated data
               organization also greatly aids in the analysis process.</p>
            <br>

            <p>Therefore, I decided to learn and improve automation technologies
            , integrating automated verification systems and coupling them
            with efficient automated data organization systems to
            systematically organize data for easier subsequent analysis.
            I gradually developed a total automation solution called g-Pico,
            integrating everything from general fixture operations to automated
             experiments, automated data organization, and analysis.</p>
            <br>

            <p>My goal is to develop a system that even beginners or those who
            don't understand programming can operate through a graphical GUI,
            and promote this system to engineers or users with similar needs.
            I hope to help everyone free their hands and spend time on more
            important things—not only in data analysis and understanding but
            also in pursuing their passions and finding other meanings
            in life.</p>
            <br>

            <p>Looking ahead, I hope to let more people understand the benefits
             that automation brings and be willing to use it to improve their
              lives. I plan to systematically collect and organize data,
              leveraging current AI technologies, and use machine learning
               for advanced data analysis and applications. I believe this
                will not only improve work efficiency but also bring new
                 possibilities to the industry.</p>
            <br>

            <p>Throughout this journey, although I often encounter
            difficulties in integrating software and hardware, I always
             look forward to creating useful tools with my own hands.
             I look forward to working with more like-minded friends
             to create a more efficient and better future together.</p>
            <br>

            </p><span style="float: right;"> Gary Chu 2024/10/04 </span></p>
            <br>
            <br>
            <br>


        `,
        image: "assets/pic/story_f2.png"
    },
    // 新增其他新聞項目
};


*/