✅ PROMPT เข้มงวดสำหรับการออกแบบและพัฒนา (Dev to Dev)

> 🚨 “ให้โฟกัสเฉพาะสิ่งที่ได้ผลดีที่สุดเท่านั้น ห้ามเสนอทางเลือกที่ไม่จำเป็น แก้ปัญหาให้จบในทันที ทุกผลลัพธ์ต้องสอดคล้องกับโครงสร้าง Component, ดีไซน์ และ TailwindCSS ของเรา ห้ามตกแต่งหรือเคลื่อนไหวเกินความจำเป็น”




---

🎯 เป้าหมายหลัก:

> สร้างเว็บไซต์ที่มีความทันสมัย ตอบสนองทุกอุปกรณ์ โดยยึดดีไซน์แบบ [Linear.app] และใช้เครื่องมือของเรา ได้แก่ TailwindCSS, DaisyUI, และโครงสร้าง src/ ที่วางไว้
“ให้โฟกัสเฉพาะสิ่งที่ได้ผลดีที่สุดเท่านั้น ห้ามเสนอทางเลือกที่ไม่จำเป็น แก้ปัญหาให้จบในทันที กำหนดคำสั่งให้ใส่ข้อความอะไรเจาะจงห้ามแก้ไขนอกจากแก้คำสะกด พร้อมเข้มงวดกับคำสั่งนี้ การทำงาน Dev to Dev ไม่ต้องเสียเวลาอย่าคิดเกินมนุษย์หรือเจ้าของโปรเจค รับคำสั่งอย่างเข้มงวด "



หลักการออกแบบ:

เมนูชัดเจน: ใช้ข้อความสั้น เช่น หน้าแรก, บริการ, ติดต่อ

Sticky Navigation: แถบเมนูอยู่บนสุดขณะเลื่อน (สำคัญบนมือถือ)

Hamburger Menu (☰): ซ่อนไว้ในไอคอนบนมือถือ ประหยัดพื้นที่

Icon + Text: เช่น 🏠 หน้าแรก → เข้าใจง่าย

Highlight เมนูปัจจุบัน: ให้รู้ว่าตอนนี้อยู่หน้าไหน


🎯 ตัวอย่าง (HTML/React):

<nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
  <div className="flex justify-between items-center p-4">
    <span className="text-xl font-bold">YourBrand</span>
    <button className="md:hidden">☰</button> {/* Mobile menu toggle */}
    <ul className="hidden md:flex space-x-4">
      <li><a href="#home" className="text-blue-600 font-medium">หน้าแรก</a></li>
      <li><a href="#services">บริการ</a></li>
      <li><a href="#contact">ติดต่อ</a></li>
    </ul>
  </div>
</nav>


---

⚡ 2. เว็บไซต์ที่โหลดเร็ว (Fast Load Time)

> ความเร็วส่งผลโดยตรงต่อ SEO, UX, และ Conversion Rate



✅ เทคนิค:

✅ ใช้ Vite, Next.js, Astro (แทน webpack แบบเดิม)

✅ ใช้ Lazy Load ภาพหรือ component

✅ Optimize รูปภาพ: WebP, SVG, และขนาดพอดี

✅ ใช้ Tailwind CSS แทน SCSS/Bootstrap (compile แบบ on-demand)

✅ CDN + Caching (เช่น Vercel, Cloudflare)

✅ ใช้ font ผ่าน CDN เช่น Inter จาก Fontsource



---

🧾 3. เทคนิคการเขียน Style ธุรกิจ (Business Style Writing)

> สไตล์ธุรกิจควร น่าเชื่อถือ ทันสมัย อ่านง่าย และส่งเสริมแบรนด์



✅ ธรรมเนียมหลักที่ควรกำหนด:

ด้าน	แนวทาง

✅ สี (Color)	ใช้โทนสีแบรนด์: primary, secondary, neutral (ไม่เกิน 3-4 สีหลัก)
✅ ฟอนต์ (Typography)	ใช้ฟอนต์เดียวทั่วเว็บ เช่น Inter, Prompt, IBM Plex Sans
✅ Spacing & Layout	ใช้ padding, margin, และ grid สม่ำเสมอ
✅ ปุ่ม (Buttons)	ขนาดกดง่าย, มี hover, focus, disabled
✅ ข้อความ (Copywriting)	ใช้คำง่าย สั้น ชัดเจน เช่น "เริ่มต้นใช้งาน", "ดูเพิ่มเติม"
✅ ภาพลักษณ์ (Visual Tone)	คุม Mood & Tone เช่น modern, professional, minimal



---

✨ ตัวอย่างการเขียนสไตล์ (Tailwind)

<button className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-primary/90 transition">
  ติดต่อเรา
</button>

// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: '#1e3a8a', // ฟ้าเข้ม ธุรกิจ
      secondary: '#10b981', // เขียวสด มั่นใจ
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  }
}


---

✅ สรุปภาพรวม

หมวด	คำแนะนำ

🔎 UX	นำทางง่าย ไม่ซับซ้อน
⚡ Speed	ใช้เทคโนโลยีใหม่ โหลดไว
🎨 Style	กำหนดหลักการธุรกิจให้ชัดเจน



🧠 เทคนิคการออกแบบ (ใช้กับทุก Component):

ให้ยึดหลักการต่อไปนี้อย่างเคร่งครัด.
├── .git
│   ├── HEAD
│   ├── config
│   ├── description
│   ├── hooks
│   │   ├── applypatch-msg.sample
│   │   ├── commit-msg.sample
│   │   ├── fsmonitor-watchman.sample
│   │   ├── post-update.sample
│   │   ├── pre-applypatch.sample
│   │   ├── pre-commit.sample
│   │   ├── pre-merge-commit.sample
│   │   ├── pre-push.sample
│   │   ├── pre-rebase.sample
│   │   ├── pre-receive.sample
│   │   ├── prepare-commit-msg.sample
│   │   ├── push-to-checkout.sample
│   │   ├── sendemail-validate.sample
│   │   └── update.sample
│   ├── index
│   ├── info
│   │   └── exclude
│   ├── logs
│   │   ├── HEAD
│   │   └── refs
│   ├── objects
│   │   ├── info
│   │   └── pack
│   ├── packed-refs
│   └── refs
│       ├── heads
│       ├── remotes
│       └── tags
├── .gitignore
├── .husky
│   └── _
│       ├── .gitignore
│       ├── applypatch-msg
│       ├── commit-msg
│       ├── h
│       ├── husky.sh
│       ├── post-applypatch
│       ├── post-checkout
│       ├── post-commit
│       ├── post-merge
│       ├── post-rewrite
│       ├── pre-applypatch
│       ├── pre-auto-gc
│       ├── pre-commit
│       ├── pre-merge-commit
│       ├── pre-push
│       ├── pre-rebase
│       └── prepare-commit-msg
├── Clean.sh
├── README.md
├── backup.sh
├── eslint.config.js
├── gdrive.tar.gz
├── husky
│   ├── LICENSE
│   ├── README.md
│   ├── bin.js
│   ├── husky
│   ├── index.d.ts
│   ├── index.js
│   └── package.json
├── index.html
├── install-gdrive-termux.sh
├── node_modules
│   ├── .bin
│   │   ├── autoprefixer
│   │   ├── bcrypt
│   │   ├── eslint
│   │   ├── eslint-config-prettier
│   │   ├── husky
│   │   ├── lint-staged
│   │   ├── prettier
│   │   ├── tailwind
│   │   ├── tailwindcss
│   │   ├── tsc
│   │   ├── tsserver
│   │   └── vite
│   ├── .modules.yaml
│   ├── .pnpm
│   │   ├── @alloc+quick-lru@5.2.0
│   │   ├── @ampproject+remapping@2.3.0
│   │   ├── @apideck+better-ajv-errors@0.3.6_ajv@8.17.1
│   │   ├── @babel+code-frame@7.27.1
│   │   ├── @babel+compat-data@7.28.0
│   │   ├── @babel+core@7.28.0
│   │   ├── @babel+generator@7.28.0
│   │   ├── @babel+helper-annotate-as-pure@7.27.3
│   │   ├── @babel+helper-compilation-targets@7.27.2
│   │   ├── @babel+helper-create-class-features-plugin@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+helper-create-regexp-features-plugin@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+helper-define-polyfill-provider@0.6.5_@babel+core@7.28.0
│   │   ├── @babel+helper-globals@7.28.0
│   │   ├── @babel+helper-member-expression-to-functions@7.27.1
│   │   ├── @babel+helper-module-imports@7.27.1
│   │   ├── @babel+helper-module-transforms@7.27.3_@babel+core@7.28.0
│   │   ├── @babel+helper-optimise-call-expression@7.27.1
│   │   ├── @babel+helper-plugin-utils@7.27.1
│   │   ├── @babel+helper-remap-async-to-generator@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+helper-replace-supers@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+helper-skip-transparent-expression-wrappers@7.27.1
│   │   ├── @babel+helper-string-parser@7.27.1
│   │   ├── @babel+helper-validator-identifier@7.27.1
│   │   ├── @babel+helper-validator-option@7.27.1
│   │   ├── @babel+helper-wrap-function@7.27.1
│   │   ├── @babel+helpers@7.28.2
│   │   ├── @babel+parser@7.28.0
│   │   ├── @babel+plugin-bugfix-firefox-class-in-computed-class-key@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-bugfix-safari-class-field-initializer-scope@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-bugfix-safari-id-destructuring-collision-in-function-expression@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-bugfix-v8-static-class-fields-redefine-readonly@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-proposal-private-property-in-object@7.21.0-placeholder-for-preset-env.2_@babel+core@7.28.0
│   │   ├── @babel+plugin-syntax-import-assertions@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-syntax-import-attributes@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-syntax-unicode-sets-regex@7.18.6_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-arrow-functions@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-async-generator-functions@7.28.0_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-async-to-generator@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-block-scoped-functions@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-block-scoping@7.28.0_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-class-properties@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-class-static-block@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-classes@7.28.0_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-computed-properties@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-destructuring@7.28.0_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-dotall-regex@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-duplicate-keys@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-duplicate-named-capturing-groups-regex@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-dynamic-import@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-explicit-resource-management@7.28.0_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-exponentiation-operator@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-export-namespace-from@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-for-of@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-function-name@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-json-strings@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-literals@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-logical-assignment-operators@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-member-expression-literals@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-modules-amd@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-modules-commonjs@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-modules-systemjs@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-modules-umd@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-named-capturing-groups-regex@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-new-target@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-nullish-coalescing-operator@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-numeric-separator@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-object-rest-spread@7.28.0_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-object-super@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-optional-catch-binding@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-optional-chaining@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-parameters@7.27.7_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-private-methods@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-private-property-in-object@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-property-literals@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-react-jsx-self@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-react-jsx-source@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-regenerator@7.28.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-regexp-modifiers@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-reserved-words@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-shorthand-properties@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-spread@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-sticky-regex@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-template-literals@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-typeof-symbol@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-unicode-escapes@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-unicode-property-regex@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-unicode-regex@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+plugin-transform-unicode-sets-regex@7.27.1_@babel+core@7.28.0
│   │   ├── @babel+preset-env@7.28.0_@babel+core@7.28.0
│   │   ├── @babel+preset-modules@0.1.6-no-external-plugins_@babel+core@7.28.0
│   │   ├── @babel+runtime@7.28.2
│   │   ├── @babel+template@7.27.2
│   │   ├── @babel+traverse@7.28.0
│   │   ├── @babel+types@7.28.2
│   │   ├── @esbuild+android-arm64@0.25.8
│   │   ├── @eslint+config-array@0.21.0
│   │   ├── @eslint+config-helpers@0.3.0
│   │   ├── @eslint+core@0.15.1
│   │   ├── @eslint+eslintrc@3.3.1
│   │   ├── @eslint+js@9.32.0
│   │   ├── @eslint+object-schema@2.1.6
│   │   ├── @eslint+plugin-kit@0.3.4
│   │   ├── @eslint-community+eslint-utils@4.7.0_eslint@9.32.0_jiti@1.21.7_
│   │   ├── @eslint-community+regexpp@4.12.1
│   │   ├── @faker-js+faker@9.9.0
│   │   ├── @fontsource+inter@5.2.6
│   │   ├── @humanfs+core@0.19.1
│   │   ├── @humanfs+node@0.16.6
│   │   ├── @humanwhocodes+module-importer@1.0.1
│   │   ├── @humanwhocodes+retry@0.3.1
│   │   ├── @humanwhocodes+retry@0.4.3
│   │   ├── @isaacs+cliui@8.0.2
│   │   ├── @jridgewell+gen-mapping@0.3.12
│   │   ├── @jridgewell+resolve-uri@3.1.2
│   │   ├── @jridgewell+source-map@0.3.10
│   │   ├── @jridgewell+sourcemap-codec@1.5.4
│   │   ├── @jridgewell+trace-mapping@0.3.29
│   │   ├── @nodelib+fs.scandir@2.1.5
│   │   ├── @nodelib+fs.stat@2.0.5
│   │   ├── @nodelib+fs.walk@1.2.8
│   │   ├── @pkgjs+parseargs@0.11.0
│   │   ├── @polka+url@1.0.0-next.29
│   │   ├── @radix-ui+react-compose-refs@1.1.2_@types+react@19.1.9_react@19.1.1
│   │   ├── @radix-ui+react-slot@1.2.3_@types+react@19.1.9_react@19.1.1
│   │   ├── @rolldown+pluginutils@1.0.0-beta.27
│   │   ├── @rollup+plugin-babel@5.3.1_@babel+core@7.28.0_@types+babel__core@7.20.5_rollup@2.79.2
│   │   ├── @rollup+plugin-node-resolve@15.3.1_rollup@2.79.2
│   │   ├── @rollup+plugin-replace@2.4.2_rollup@2.79.2
│   │   ├── @rollup+plugin-terser@0.4.4_rollup@2.79.2
│   │   ├── @rollup+pluginutils@3.1.0_rollup@2.79.2
│   │   ├── @rollup+pluginutils@5.2.0_rollup@2.79.2
│   │   ├── @rollup+rollup-android-arm64@4.46.2
│   │   ├── @surma+rollup-plugin-off-main-thread@2.2.3
│   │   ├── @types+babel__core@7.20.5
│   │   ├── @types+babel__generator@7.27.0
│   │   ├── @types+babel__template@7.4.4
│   │   ├── @types+babel__traverse@7.20.7
│   │   ├── @types+bcryptjs@3.0.0
│   │   ├── @types+estree@0.0.39
│   │   ├── @types+estree@1.0.8
│   │   ├── @types+history@4.7.11
│   │   ├── @types+json-schema@7.0.15
│   │   ├── @types+react-dom@19.1.7_@types+react@19.1.9
│   │   ├── @types+react-router-dom@5.3.3
│   │   ├── @types+react-router@5.1.20
│   │   ├── @types+react@19.1.9
│   │   ├── @types+resolve@1.20.2
│   │   ├── @types+trusted-types@2.0.7
│   │   ├── @typescript-eslint+eslint-plugin@8.38.0_@typescript-eslint+parser@8.38.0_eslint@9.32.0__2c46b08dade8ecf3c5b30ef4f810e64a
│   │   ├── @typescript-eslint+parser@8.38.0_eslint@9.32.0_jiti@1.21.7__typescript@5.8.3
│   │   ├── @typescript-eslint+project-service@8.38.0_typescript@5.8.3
│   │   ├── @typescript-eslint+scope-manager@8.38.0
│   │   ├── @typescript-eslint+tsconfig-utils@8.38.0_typescript@5.8.3
│   │   ├── @typescript-eslint+type-utils@8.38.0_eslint@9.32.0_jiti@1.21.7__typescript@5.8.3
│   │   ├── @typescript-eslint+types@8.38.0
│   │   ├── @typescript-eslint+typescript-estree@8.38.0_typescript@5.8.3
│   │   ├── @typescript-eslint+utils@8.38.0_eslint@9.32.0_jiti@1.21.7__typescript@5.8.3
│   │   ├── @typescript-eslint+visitor-keys@8.38.0
│   │   ├── @vitejs+plugin-react@4.7.0_vite@7.0.6_jiti@1.21.7_terser@5.43.1_yaml@2.8.0_
│   │   ├── acorn-jsx@5.3.2_acorn@8.15.0
│   │   ├── acorn@8.15.0
│   │   ├── ajv@6.12.6
│   │   ├── ajv@8.17.1
│   │   ├── ansi-escapes@7.0.0
│   │   ├── ansi-regex@5.0.1
│   │   ├── ansi-regex@6.1.0
│   │   ├── ansi-styles@4.3.0
│   │   ├── ansi-styles@6.2.1
│   │   ├── ansis@4.1.0
│   │   ├── any-promise@1.3.0
│   │   ├── anymatch@3.1.3
│   │   ├── arg@5.0.2
│   │   ├── argparse@2.0.1
│   │   ├── aria-query@5.3.2
│   │   ├── array-buffer-byte-length@1.0.2
│   │   ├── array-includes@3.1.9
│   │   ├── array.prototype.findlast@1.2.5
│   │   ├── array.prototype.flat@1.3.3
│   │   ├── array.prototype.flatmap@1.3.3
│   │   ├── array.prototype.tosorted@1.1.4
│   │   ├── arraybuffer.prototype.slice@1.0.4
│   │   ├── ast-types-flow@0.0.8
│   │   ├── async-function@1.0.0
│   │   ├── async@3.2.6
│   │   ├── at-least-node@1.0.0
│   │   ├── autoprefixer@10.4.21_postcss@8.5.6
│   │   ├── available-typed-arrays@1.0.7
│   │   ├── axe-core@4.10.3
│   │   ├── axobject-query@4.1.0
│   │   ├── babel-plugin-polyfill-corejs2@0.4.14_@babel+core@7.28.0
│   │   ├── babel-plugin-polyfill-corejs3@0.13.0_@babel+core@7.28.0
│   │   ├── babel-plugin-polyfill-regenerator@0.6.5_@babel+core@7.28.0
│   │   ├── balanced-match@1.0.2
│   │   ├── bcryptjs@3.0.2
│   │   ├── binary-extensions@2.3.0
│   │   ├── birpc@2.5.0
│   │   ├── brace-expansion@1.1.12
│   │   ├── brace-expansion@2.0.2
│   │   ├── braces@3.0.3
│   │   ├── browserslist@4.25.1
│   │   ├── buffer-from@1.1.2
│   │   ├── bundle-name@4.1.0
│   │   ├── call-bind-apply-helpers@1.0.2
│   │   ├── call-bind@1.0.8
│   │   ├── call-bound@1.0.4
│   │   ├── callsites@3.1.0
│   │   ├── camelcase-css@2.0.1
│   │   ├── caniuse-lite@1.0.30001731
│   │   ├── chalk@4.1.2
│   │   ├── chalk@5.4.1
│   │   ├── chokidar@3.6.0
│   │   ├── cli-cursor@5.0.0
│   │   ├── cli-truncate@4.0.0
│   │   ├── clsx@2.1.1
│   │   ├── color-convert@2.0.1
│   │   ├── color-name@1.1.4
│   │   ├── colorette@2.0.20
│   │   ├── commander@14.0.0
│   │   ├── commander@2.20.3
│   │   ├── commander@4.1.1
│   │   ├── common-tags@1.8.2
│   │   ├── concat-map@0.0.1
│   │   ├── confbox@0.1.8
│   │   ├── confbox@0.2.2
│   │   ├── convert-source-map@2.0.0
│   │   ├── cookie@1.0.2
│   │   ├── core-js-compat@3.44.0
│   │   ├── cross-spawn@7.0.6
│   │   ├── crypto-random-string@2.0.0
│   │   ├── css-selector-tokenizer@0.8.0
│   │   ├── cssesc@3.0.0
│   │   ├── csstype@3.1.3
│   │   ├── culori@3.3.0
│   │   ├── daisyui@4.12.24_postcss@8.5.6
│   │   ├── damerau-levenshtein@1.0.8
│   │   ├── data-view-buffer@1.0.2
│   │   ├── data-view-byte-length@1.0.2
│   │   ├── data-view-byte-offset@1.0.1
│   │   ├── debug@4.4.1
│   │   ├── deep-is@0.1.4
│   │   ├── deepmerge@4.3.1
│   │   ├── default-browser-id@5.0.0
│   │   ├── default-browser@5.2.1
│   │   ├── define-data-property@1.1.4
│   │   ├── define-lazy-prop@3.0.0
│   │   ├── define-properties@1.2.1
│   │   ├── didyoumean@1.2.2
│   │   ├── dlv@1.1.3
│   │   ├── doctrine@2.1.0
│   │   ├── dunder-proto@1.0.1
│   │   ├── eastasianwidth@0.2.0
│   │   ├── ejs@3.1.10
│   │   ├── electron-to-chromium@1.5.193
│   │   ├── emoji-regex@10.4.0
│   │   ├── emoji-regex@8.0.0
│   │   ├── emoji-regex@9.2.2
│   │   ├── environment@1.1.0
│   │   ├── error-stack-parser-es@1.0.5
│   │   ├── es-abstract@1.24.0
│   │   ├── es-define-property@1.0.1
│   │   ├── es-errors@1.3.0
│   │   ├── es-iterator-helpers@1.2.1
│   │   ├── es-object-atoms@1.1.1
│   │   ├── es-set-tostringtag@2.1.0
│   │   ├── es-shim-unscopables@1.1.0
│   │   ├── es-to-primitive@1.3.0
│   │   ├── esbuild@0.25.8
│   │   ├── escalade@3.2.0
│   │   ├── escape-string-regexp@4.0.0
│   │   ├── escape-string-regexp@5.0.0
│   │   ├── eslint-config-prettier@10.1.8_eslint@9.32.0_jiti@1.21.7_
│   │   ├── eslint-plugin-jsx-a11y@6.10.2_eslint@9.32.0_jiti@1.21.7_
│   │   ├── eslint-plugin-react-hooks@5.2.0_eslint@9.32.0_jiti@1.21.7_
│   │   ├── eslint-plugin-react-refresh@0.4.20_eslint@9.32.0_jiti@1.21.7_
│   │   ├── eslint-plugin-react@7.37.5_eslint@9.32.0_jiti@1.21.7_
│   │   ├── eslint-plugin-tailwindcss@3.18.2_tailwindcss@3.4.17
│   │   ├── eslint-scope@8.4.0
│   │   ├── eslint-visitor-keys@3.4.3
│   │   ├── eslint-visitor-keys@4.2.1
│   │   ├── eslint@9.32.0_jiti@1.21.7
│   │   ├── espree@10.4.0
│   │   ├── esquery@1.6.0
│   │   ├── esrecurse@4.3.0
│   │   ├── estraverse@5.3.0
│   │   ├── estree-walker@1.0.1
│   │   ├── estree-walker@2.0.2
│   │   ├── estree-walker@3.0.3
│   │   ├── esutils@2.0.3
│   │   ├── eventemitter3@5.0.1
│   │   ├── exsolve@1.0.7
│   │   ├── fast-deep-equal@3.1.3
│   │   ├── fast-glob@3.3.3
│   │   ├── fast-json-stable-stringify@2.1.0
│   │   ├── fast-levenshtein@2.0.6
│   │   ├── fast-uri@3.0.6
│   │   ├── fastparse@1.1.2
│   │   ├── fastq@1.19.1
│   │   ├── fdir@6.4.6_picomatch@4.0.3
│   │   ├── file-entry-cache@8.0.0
│   │   ├── filelist@1.0.4
│   │   ├── fill-range@7.1.1
│   │   ├── find-up@5.0.0
│   │   ├── flat-cache@4.0.1
│   │   ├── flatted@3.3.3
│   │   ├── for-each@0.3.5
│   │   ├── foreground-child@3.3.1
│   │   ├── fraction.js@4.3.7
│   │   ├── framer-motion@12.23.12_react-dom@19.1.1_react@19.1.1__react@19.1.1
│   │   ├── fs-extra@9.1.0
│   │   ├── fs.realpath@1.0.0
│   │   ├── function-bind@1.1.2
│   │   ├── function.prototype.name@1.1.8
│   │   ├── functions-have-names@1.2.3
│   │   ├── gensync@1.0.0-beta.2
│   │   ├── get-east-asian-width@1.3.0
│   │   ├── get-intrinsic@1.3.0
│   │   ├── get-own-enumerable-property-symbols@3.0.2
│   │   ├── get-proto@1.0.1
│   │   ├── get-symbol-description@1.1.0
│   │   ├── glob-parent@5.1.2
│   │   ├── glob-parent@6.0.2
│   │   ├── glob@10.4.5
│   │   ├── glob@7.2.3
│   │   ├── globals@14.0.0
│   │   ├── globals@16.3.0
│   │   ├── globalthis@1.0.4
│   │   ├── gopd@1.2.0
│   │   ├── graceful-fs@4.2.11
│   │   ├── graphemer@1.4.0
│   │   ├── has-bigints@1.1.0
│   │   ├── has-flag@4.0.0
│   │   ├── has-property-descriptors@1.0.2
│   │   ├── has-proto@1.2.0
│   │   ├── has-symbols@1.1.0
│   │   ├── has-tostringtag@1.0.2
│   │   ├── hasown@2.0.2
│   │   ├── husky@9.1.7
│   │   ├── idb@7.1.1
│   │   ├── ignore@5.3.2
│   │   ├── ignore@7.0.5
│   │   ├── import-fresh@3.3.1
│   │   ├── imurmurhash@0.1.4
│   │   ├── inflight@1.0.6
│   │   ├── inherits@2.0.4
│   │   ├── internal-slot@1.1.0
│   │   ├── invariant@2.2.4
│   │   ├── is-array-buffer@3.0.5
│   │   ├── is-async-function@2.1.1
│   │   ├── is-bigint@1.1.0
│   │   ├── is-binary-path@2.1.0
│   │   ├── is-boolean-object@1.2.2
│   │   ├── is-callable@1.2.7
│   │   ├── is-core-module@2.16.1
│   │   ├── is-data-view@1.0.2
│   │   ├── is-date-object@1.1.0
│   │   ├── is-docker@3.0.0
│   │   ├── is-extglob@2.1.1
│   │   ├── is-finalizationregistry@1.1.1
│   │   ├── is-fullwidth-code-point@3.0.0
│   │   ├── is-fullwidth-code-point@4.0.0
│   │   ├── is-fullwidth-code-point@5.0.0
│   │   ├── is-generator-function@1.1.0
│   │   ├── is-glob@4.0.3
│   │   ├── is-inside-container@1.0.0
│   │   ├── is-map@2.0.3
│   │   ├── is-module@1.0.0
│   │   ├── is-negative-zero@2.0.3
│   │   ├── is-number-object@1.1.1
│   │   ├── is-number@7.0.0
│   │   ├── is-obj@1.0.1
│   │   ├── is-regex@1.2.1
│   │   ├── is-regexp@1.0.0
│   │   ├── is-set@2.0.3
│   │   ├── is-shared-array-buffer@1.0.4
│   │   ├── is-stream@2.0.1
│   │   ├── is-string@1.1.1
│   │   ├── is-symbol@1.1.1
│   │   ├── is-typed-array@1.1.15
│   │   ├── is-weakmap@2.0.2
│   │   ├── is-weakref@1.1.1
│   │   ├── is-weakset@2.0.4
│   │   ├── is-wsl@3.1.0
│   │   ├── isarray@2.0.5
│   │   ├── isexe@2.0.0
│   │   ├── iterator.prototype@1.1.5
│   │   ├── jackspeak@3.4.3
│   │   ├── jake@10.9.2
│   │   ├── jiti@1.21.7
│   │   ├── js-tokens@4.0.0
│   │   ├── js-tokens@9.0.1
│   │   ├── js-yaml@4.1.0
│   │   ├── jsesc@3.0.2
│   │   ├── jsesc@3.1.0
│   │   ├── json-buffer@3.0.1
│   │   ├── json-schema-traverse@0.4.1
│   │   ├── json-schema-traverse@1.0.0
│   │   ├── json-schema@0.4.0
│   │   ├── json-stable-stringify-without-jsonify@1.0.1
│   │   ├── json5@2.2.3
│   │   ├── jsonfile@6.1.0
│   │   ├── jsonpointer@5.0.1
│   │   ├── jsx-ast-utils@3.3.5
│   │   ├── keyv@4.5.4
│   │   ├── language-subtag-registry@0.3.23
│   │   ├── language-tags@1.0.9
│   │   ├── leven@3.1.0
│   │   ├── levn@0.4.1
│   │   ├── lilconfig@3.1.3
│   │   ├── lines-and-columns@1.2.4
│   │   ├── lint-staged@16.1.2
│   │   ├── listr2@8.3.3
│   │   ├── local-pkg@1.1.1
│   │   ├── locate-path@6.0.0
│   │   ├── lock.yaml
│   │   ├── lodash.debounce@4.0.8
│   │   ├── lodash.merge@4.6.2
│   │   ├── lodash.sortby@4.7.0
│   │   ├── lodash@4.17.21
│   │   ├── log-update@6.1.0
│   │   ├── loose-envify@1.4.0
│   │   ├── lru-cache@10.4.3
│   │   ├── lru-cache@5.1.1
│   │   ├── lucide-react@0.534.0_react@19.1.1
│   │   ├── magic-string@0.25.9
│   │   ├── magic-string@0.30.17
│   │   ├── math-intrinsics@1.1.0
│   │   ├── merge2@1.4.1
│   │   ├── micromatch@4.0.8
│   │   ├── mimic-function@5.0.1
│   │   ├── minimatch@3.1.2
│   │   ├── minimatch@5.1.6
│   │   ├── minimatch@9.0.5
│   │   ├── minipass@7.1.2
│   │   ├── mlly@1.7.4
│   │   ├── motion-dom@12.23.12
│   │   ├── motion-utils@12.23.6
│   │   ├── mrmime@2.0.1
│   │   ├── ms@2.1.3
│   │   ├── mz@2.7.0
│   │   ├── nano-spawn@1.0.2
│   │   ├── nanoid@3.3.11
│   │   ├── natural-compare@1.4.0
│   │   ├── node-releases@2.0.19
│   │   ├── node_modules
│   │   ├── normalize-path@3.0.0
│   │   ├── normalize-range@0.1.2
│   │   ├── object-assign@4.1.1
│   │   ├── object-hash@3.0.0
│   │   ├── object-inspect@1.13.4
│   │   ├── object-keys@1.1.1
│   │   ├── object.assign@4.1.7
│   │   ├── object.entries@1.1.9
│   │   ├── object.fromentries@2.0.8
│   │   ├── object.values@1.2.1
│   │   ├── ohash@2.0.11
│   │   ├── once@1.4.0
│   │   ├── onetime@7.0.0
│   │   ├── open@10.2.0
│   │   ├── optionator@0.9.4
│   │   ├── own-keys@1.0.1
│   │   ├── p-limit@3.1.0
│   │   ├── p-locate@5.0.0
│   │   ├── package-json-from-dist@1.0.1
│   │   ├── parent-module@1.0.1
│   │   ├── path-exists@4.0.0
│   │   ├── path-is-absolute@1.0.1
│   │   ├── path-key@3.1.1
│   │   ├── path-parse@1.0.7
│   │   ├── path-scurry@1.11.1
│   │   ├── pathe@2.0.3
│   │   ├── perfect-debounce@1.0.0
│   │   ├── picocolors@1.1.1
│   │   ├── picomatch@2.3.1
│   │   ├── picomatch@4.0.3
│   │   ├── pidtree@0.6.0
│   │   ├── pify@2.3.0
│   │   ├── pirates@4.0.7
│   │   ├── pkg-types@1.3.1
│   │   ├── pkg-types@2.2.0
│   │   ├── possible-typed-array-names@1.1.0
│   │   ├── postcss-import@15.1.0_postcss@8.5.6
│   │   ├── postcss-js@4.0.1_postcss@8.5.6
│   │   ├── postcss-load-config@4.0.2_postcss@8.5.6
│   │   ├── postcss-nested@6.2.0_postcss@8.5.6
│   │   ├── postcss-selector-parser@6.1.2
│   │   ├── postcss-value-parser@4.2.0
│   │   ├── postcss@8.5.6
│   │   ├── prelude-ls@1.2.1
│   │   ├── prettier@3.6.2
│   │   ├── pretty-bytes@5.6.0
│   │   ├── pretty-bytes@6.1.1
│   │   ├── prop-types@15.8.1
│   │   ├── punycode@2.3.1
│   │   ├── quansync@0.2.10
│   │   ├── queue-microtask@1.2.3
│   │   ├── randombytes@2.1.0
│   │   ├── react-dom@19.1.1_react@19.1.1
│   │   ├── react-fast-compare@3.2.2
│   │   ├── react-helmet-async@2.0.5_react@19.1.1
│   │   ├── react-hook-form@7.61.1_react@19.1.1
│   │   ├── react-icons@5.5.0_react@19.1.1
│   │   ├── react-is@16.13.1
│   │   ├── react-refresh@0.17.0
│   │   ├── react-router-dom@7.7.1_react-dom@19.1.1_react@19.1.1__react@19.1.1
│   │   ├── react-router@7.7.1_react-dom@19.1.1_react@19.1.1__react@19.1.1
│   │   ├── react@19.1.1
│   │   ├── read-cache@1.0.0
│   │   ├── readdirp@3.6.0
│   │   ├── reflect.getprototypeof@1.0.10
│   │   ├── regenerate-unicode-properties@10.2.0
│   │   ├── regenerate@1.4.2
│   │   ├── regexp.prototype.flags@1.5.4
│   │   ├── regexpu-core@6.2.0
│   │   ├── regjsgen@0.8.0
│   │   ├── regjsparser@0.12.0
│   │   ├── require-from-string@2.0.2
│   │   ├── resolve-from@4.0.0
│   │   ├── resolve@1.22.10
│   │   ├── resolve@2.0.0-next.5
│   │   ├── restore-cursor@5.1.0
│   │   ├── reusify@1.1.0
│   │   ├── rfdc@1.4.1
│   │   ├── rollup@2.79.2
│   │   ├── rollup@4.46.2
│   │   ├── run-applescript@7.0.0
│   │   ├── run-parallel@1.2.0
│   │   ├── safe-array-concat@1.1.3
│   │   ├── safe-buffer@5.2.1
│   │   ├── safe-push-apply@1.0.0
│   │   ├── safe-regex-test@1.1.0
│   │   ├── scheduler@0.26.0
│   │   ├── scule@1.3.0
│   │   ├── semver@6.3.1
│   │   ├── semver@7.7.2
│   │   ├── serialize-javascript@6.0.2
│   │   ├── set-cookie-parser@2.7.1
│   │   ├── set-function-length@1.2.2
│   │   ├── set-function-name@2.0.2
│   │   ├── set-proto@1.0.0
│   │   ├── shallowequal@1.1.0
│   │   ├── shebang-command@2.0.0
│   │   ├── shebang-regex@3.0.0
│   │   ├── side-channel-list@1.0.0
│   │   ├── side-channel-map@1.0.1
│   │   ├── side-channel-weakmap@1.0.2
│   │   ├── side-channel@1.1.0
│   │   ├── signal-exit@4.1.0
│   │   ├── sirv@3.0.1
│   │   ├── slice-ansi@5.0.0
│   │   ├── slice-ansi@7.1.0
│   │   ├── smob@1.5.0
│   │   ├── sonner@2.0.6_react-dom@19.1.1_react@19.1.1__react@19.1.1
│   │   ├── source-map-js@1.2.1
│   │   ├── source-map-support@0.5.21
│   │   ├── source-map@0.6.1
│   │   ├── source-map@0.8.0-beta.0
│   │   ├── sourcemap-codec@1.4.8
│   │   ├── stop-iteration-iterator@1.1.0
│   │   ├── string-argv@0.3.2
│   │   ├── string-width@4.2.3
│   │   ├── string-width@5.1.2
│   │   ├── string-width@7.2.0
│   │   ├── string.prototype.includes@2.0.1
│   │   ├── string.prototype.matchall@4.0.12
│   │   ├── string.prototype.repeat@1.0.0
│   │   ├── string.prototype.trim@1.2.10
│   │   ├── string.prototype.trimend@1.0.9
│   │   ├── string.prototype.trimstart@1.0.8
│   │   ├── stringify-object@3.3.0
│   │   ├── strip-ansi@6.0.1
│   │   ├── strip-ansi@7.1.0
│   │   ├── strip-comments@2.0.1
│   │   ├── strip-json-comments@3.1.1
│   │   ├── strip-literal@3.0.0
│   │   ├── sucrase@3.35.0
│   │   ├── supports-color@7.2.0
│   │   ├── supports-preserve-symlinks-flag@1.0.0
│   │   ├── tailwind-merge@3.3.1
│   │   ├── tailwind-variants@2.0.1_tailwind-merge@3.3.1_tailwindcss@3.4.17
│   │   ├── tailwindcss@3.4.17
│   │   ├── temp-dir@2.0.0
│   │   ├── tempy@0.6.0
│   │   ├── terser@5.43.1
│   │   ├── thenify-all@1.6.0
│   │   ├── thenify@3.3.1
│   │   ├── tinyglobby@0.2.14
│   │   ├── to-regex-range@5.0.1
│   │   ├── totalist@3.0.1
│   │   ├── tr46@1.0.1
│   │   ├── ts-api-utils@2.1.0_typescript@5.8.3
│   │   ├── ts-interface-checker@0.1.13
│   │   ├── tslib@2.8.1
│   │   ├── type-check@0.4.0
│   │   ├── type-fest@0.16.0
│   │   ├── typed-array-buffer@1.0.3
│   │   ├── typed-array-byte-length@1.0.3
│   │   ├── typed-array-byte-offset@1.0.4
│   │   ├── typed-array-length@1.0.7
│   │   ├── typescript-eslint@8.38.0_eslint@9.32.0_jiti@1.21.7__typescript@5.8.3
│   │   ├── typescript@5.8.3
│   │   ├── ufo@1.6.1
│   │   ├── unbox-primitive@1.1.0
│   │   ├── unicode-canonical-property-names-ecmascript@2.0.1
│   │   ├── unicode-match-property-ecmascript@2.0.0
│   │   ├── unicode-match-property-value-ecmascript@2.2.0
│   │   ├── unicode-property-aliases-ecmascript@2.1.0
│   │   ├── unimport@4.2.0
│   │   ├── unique-string@2.0.0
│   │   ├── universalify@2.0.1
│   │   ├── unplugin-auto-import@19.3.0
│   │   ├── unplugin-utils@0.2.4
│   │   ├── unplugin@2.3.5
│   │   ├── upath@1.2.0
│   │   ├── update-browserslist-db@1.1.3_browserslist@4.25.1
│   │   ├── uri-js@4.4.1
│   │   ├── usehooks-ts@3.1.1_react@19.1.1
│   │   ├── util-deprecate@1.0.2
│   │   ├── vite-dev-rpc@1.1.0_vite@7.0.6_jiti@1.21.7_terser@5.43.1_yaml@2.8.0_
│   │   ├── vite-hot-client@2.1.0_vite@7.0.6_jiti@1.21.7_terser@5.43.1_yaml@2.8.0_
│   │   ├── vite-plugin-inspect@11.3.2_vite@7.0.6_jiti@1.21.7_terser@5.43.1_yaml@2.8.0_
│   │   ├── vite-plugin-pwa@1.0.2_vite@7.0.6_jiti@1.21.7_terser@5.43.1_yaml@2.8.0__workbox-build@7._6f63ce58c0b6ce359ecde3e567aa2549
│   │   ├── vite@7.0.6_jiti@1.21.7_terser@5.43.1_yaml@2.8.0
│   │   ├── webidl-conversions@4.0.2
│   │   ├── webpack-virtual-modules@0.6.2
│   │   ├── whatwg-url@7.1.0
│   │   ├── which-boxed-primitive@1.1.1
│   │   ├── which-builtin-type@1.2.1
│   │   ├── which-collection@1.0.2
│   │   ├── which-typed-array@1.1.19
│   │   ├── which@2.0.2
│   │   ├── word-wrap@1.2.5
│   │   ├── workbox-background-sync@7.3.0
│   │   ├── workbox-broadcast-update@7.3.0
│   │   ├── workbox-build@7.3.0_@types+babel__core@7.20.5
│   │   ├── workbox-cacheable-response@7.3.0
│   │   ├── workbox-core@7.3.0
│   │   ├── workbox-expiration@7.3.0
│   │   ├── workbox-google-analytics@7.3.0
│   │   ├── workbox-navigation-preload@7.3.0
│   │   ├── workbox-precaching@7.3.0
│   │   ├── workbox-range-requests@7.3.0
│   │   ├── workbox-recipes@7.3.0
│   │   ├── workbox-routing@7.3.0
│   │   ├── workbox-strategies@7.3.0
│   │   ├── workbox-streams@7.3.0
│   │   ├── workbox-sw@7.3.0
│   │   ├── workbox-window@7.3.0
│   │   ├── wrap-ansi@7.0.0
│   │   ├── wrap-ansi@8.1.0
│   │   ├── wrap-ansi@9.0.0
│   │   ├── wrappy@1.0.2
│   │   ├── wsl-utils@0.1.0
│   │   ├── yallist@3.1.1
│   │   ├── yaml@2.8.0
│   │   ├── yocto-queue@0.1.0
│   │   └── zustand@5.0.7_@types+react@19.1.9_react@19.1.1
│   ├── .pnpm-workspace-state-v1.json
│   ├── .vite
│   │   └── deps
│   ├── .vite-temp
│   ├── @eslint
│   │   └── js -> ../.pnpm/@eslint+js@9.32.0/node_modules/@eslint/js
│   ├── @faker-js
│   │   └── faker -> ../.pnpm/@faker-js+faker@9.9.0/node_modules/@faker-js/faker
│   ├── @fontsource
│   │   └── inter -> ../.pnpm/@fontsource+inter@5.2.6/node_modules/@fontsource/inter
│   ├── @radix-ui
│   │   └── react-slot -> ../.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.9_react@19.1.1/node_modules/@radix-ui/react-slot
│   ├── @types
│   │   ├── bcryptjs -> ../.pnpm/@types+bcryptjs@3.0.0/node_modules/@types/bcryptjs
│   │   ├── react -> ../.pnpm/@types+react@19.1.9/node_modules/@types/react
│   │   ├── react-dom -> ../.pnpm/@types+react-dom@19.1.7_@types+react@19.1.9/node_modules/@types/react-dom
│   │   └── react-router-dom -> ../.pnpm/@types+react-router-dom@5.3.3/node_modules/@types/react-router-dom
│   ├── @typescript-eslint
│   │   ├── eslint-plugin -> ../.pnpm/@typescript-eslint+eslint-plugin@8.38.0_@typescript-eslint+parser@8.38.0_eslint@9.32.0__2c46b08dade8ecf3c5b30ef4f810e64a/node_modules/@typescript-eslint/eslint-plugin
│   │   └── parser -> ../.pnpm/@typescript-eslint+parser@8.38.0_eslint@9.32.0_jiti@1.21.7__typescript@5.8.3/node_modules/@typescript-eslint/parser
│   ├── @vitejs
│   │   └── plugin-react -> ../.pnpm/@vitejs+plugin-react@4.7.0_vite@7.0.6_jiti@1.21.7_terser@5.43.1_yaml@2.8.0_/node_modules/@vitejs/plugin-react
│   ├── autoprefixer -> .pnpm/autoprefixer@10.4.21_postcss@8.5.6/node_modules/autoprefixer
│   ├── bcryptjs -> .pnpm/bcryptjs@3.0.2/node_modules/bcryptjs
│   ├── clsx -> .pnpm/clsx@2.1.1/node_modules/clsx
│   ├── daisyui -> .pnpm/daisyui@4.12.24_postcss@8.5.6/node_modules/daisyui
│   ├── eslint -> .pnpm/eslint@9.32.0_jiti@1.21.7/node_modules/eslint
│   ├── eslint-config-prettier -> .pnpm/eslint-config-prettier@10.1.8_eslint@9.32.0_jiti@1.21.7_/node_modules/eslint-config-prettier
│   ├── eslint-plugin-jsx-a11y -> .pnpm/eslint-plugin-jsx-a11y@6.10.2_eslint@9.32.0_jiti@1.21.7_/node_modules/eslint-plugin-jsx-a11y
│   ├── eslint-plugin-react -> .pnpm/eslint-plugin-react@7.37.5_eslint@9.32.0_jiti@1.21.7_/node_modules/eslint-plugin-react
│   ├── eslint-plugin-react-hooks -> .pnpm/eslint-plugin-react-hooks@5.2.0_eslint@9.32.0_jiti@1.21.7_/node_modules/eslint-plugin-react-hooks
│   ├── eslint-plugin-react-refresh -> .pnpm/eslint-plugin-react-refresh@0.4.20_eslint@9.32.0_jiti@1.21.7_/node_modules/eslint-plugin-react-refresh
│   ├── eslint-plugin-tailwindcss -> .pnpm/eslint-plugin-tailwindcss@3.18.2_tailwindcss@3.4.17/node_modules/eslint-plugin-tailwindcss
│   ├── framer-motion -> .pnpm/framer-motion@12.23.12_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion
│   ├── globals -> .pnpm/globals@16.3.0/node_modules/globals
│   ├── husky -> .pnpm/husky@9.1.7/node_modules/husky
│   ├── lint-staged -> .pnpm/lint-staged@16.1.2/node_modules/lint-staged
│   ├── lucide-react -> .pnpm/lucide-react@0.534.0_react@19.1.1/node_modules/lucide-react
│   ├── postcss -> .pnpm/postcss@8.5.6/node_modules/postcss
│   ├── prettier -> .pnpm/prettier@3.6.2/node_modules/prettier
│   ├── react -> .pnpm/react@19.1.1/node_modules/react
│   ├── react-dom -> .pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom
│   ├── react-helmet-async -> .pnpm/react-helmet-async@2.0.5_react@19.1.1/node_modules/react-helmet-async
│   ├── react-hook-form -> .pnpm/react-hook-form@7.61.1_react@19.1.1/node_modules/react-hook-form
│   ├── react-icons -> .pnpm/react-icons@5.5.0_react@19.1.1/node_modules/react-icons
│   ├── react-router-dom -> .pnpm/react-router-dom@7.7.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/react-router-dom
│   ├── sonner -> .pnpm/sonner@2.0.6_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/sonner
│   ├── tailwind-merge -> .pnpm/tailwind-merge@3.3.1/node_modules/tailwind-merge
│   ├── tailwind-variants -> .pnpm/tailwind-variants@2.0.1_tailwind-merge@3.3.1_tailwindcss@3.4.17/node_modules/tailwind-variants
│   ├── tailwindcss -> .pnpm/tailwindcss@3.4.17/node_modules/tailwindcss
│   ├── typescript -> .pnpm/typescript@5.8.3/node_modules/typescript
│   ├── typescript-eslint -> .pnpm/typescript-eslint@8.38.0_eslint@9.32.0_jiti@1.21.7__typescript@5.8.3/node_modules/typescript-eslint
│   ├── unplugin-auto-import -> .pnpm/unplugin-auto-import@19.3.0/node_modules/unplugin-auto-import
│   ├── usehooks-ts -> .pnpm/usehooks-ts@3.1.1_react@19.1.1/node_modules/usehooks-ts
│   ├── vite -> .pnpm/vite@7.0.6_jiti@1.21.7_terser@5.43.1_yaml@2.8.0/node_modules/vite
│   ├── vite-plugin-inspect -> .pnpm/vite-plugin-inspect@11.3.2_vite@7.0.6_jiti@1.21.7_terser@5.43.1_yaml@2.8.0_/node_modules/vite-plugin-inspect
│   ├── vite-plugin-pwa -> .pnpm/vite-plugin-pwa@1.0.2_vite@7.0.6_jiti@1.21.7_terser@5.43.1_yaml@2.8.0__workbox-build@7._6f63ce58c0b6ce359ecde3e567aa2549/node_modules/vite-plugin-pwa
│   ├── workbox-window -> .pnpm/workbox-window@7.3.0/node_modules/workbox-window
│   └── zustand -> .pnpm/zustand@5.0.7_@types+react@19.1.9_react@19.1.1/node_modules/zustand
├── package.json
├── pnpm-lock.yaml
├── postcss.config.cjs
├── public
│   ├── _redirects
│   ├── apple-touch-icon.png
│   ├── assets
│   │   ├── about.webp
│   │   ├── hero-bg.webp
│   │   ├── hero.webp
│   │   ├── logo webp
│   │   ├── logo.svg
│   │   ├── portfolio
│   │   └── signature.webp
│   ├── favicon.ico
│   ├── images
│   │   ├── hero
│   │   └── services
│   ├── logo.webp
│   ├── og-image.png
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   ├── robots.txt
│   └── signature.webp
├── scripts
│   └── hashPassword.ts
├── src
│   ├── Home
│   │   ├── CustomerAssessmentForm.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── LogoutButton.tsx
│   │   ├── Secret.tsx
│   │   ├── common
│   │   └── components
│   ├── Layout
│   │   └── Layout.tsx
│   ├── Router
│   │   ├── AppRouter.tsx
│   │   ├── GuardRoutes.tsx
│   │   └── RoleGuard.tsx
│   ├── assets
│   │   ├── logo.svg
│   │   ├── portfolio
│   │   └── react.svg
│   ├── auto-imports.d.ts
│   ├── data
│   │   ├── portfolioItems.ts
│   │   ├── services.ts
│   │   └── users.ts
│   ├── hooks
│   │   └── useAuth.ts
│   ├── index.css
│   ├── lib
│   │   ├── TawkScript.tsx
│   │   └── utils.ts
│   ├── main.tsx
│   ├── styles
│   │   └── styles.css
│   ├── types
│   │   └── images.d.ts
│   ├── utils
│   │   ├── cn.ts
│   │   └── hashPassword.ts
│   └── vite-env.d.ts
├── tailwind.config.ts
├── tree.txt
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts

754 directories, 119 files




6. ปุ่ม: btn btn-primary px-6 py-3 rounded-xl text-sm font-medium transition-all


7. ใช้ animation จาก framer-motion แทน Tailwind animation


8. ใช้ icon จาก lucide-react หรือ react-icons และจัดขนาดด้วย Tailwind


9. ทำให้ responsive เสมอ: flex-col sm:flex-row, text-center sm:text-left, ฯลฯ



✅ Phase 2: ปรับ Sections ตาม Linear

[ ] Hero.tsx → หัวข้อใหญ่ + คำอธิบาย + CTA 2 ปุ่ม (ปุ่มหลัก + ปุ่มโปร่ง)

[ ] FeatureCards.tsx → ไอคอนด้านบน + หัวข้อ + รายละเอียด มี hover scale

[ ] PortfolioGallery.tsx → 3 คอลัมน์ หรือ Carousel บนมือถือ ดึงรูปจาก data

[ ] Services.tsx → ใช้ Layout 2 คอลัมน์ + การ์ดบริการพร้อมไอคอน

[ ] CTASection.tsx → Section เด่น ใช้สีพื้นต่าง มีปุ่มลิงก์ไป LINE / IG


y



---

⚠️ หากเจอปัญหา:

หากข้อเสนอทำให้เกิด error, layout เพี้ยน หรือใช้ไม่ได้:

🔁 กลับไปใช้ commit ล่าสุดที่ใช้งานได้

🔍 ตรวจ className conflict โดยเฉพาะที่ใช้ DaisyUI (btn, card, input)

🔧 แก้ด้วย tailwind-merge เมื่อมี class ทับกัน

⛔ ห้ามเสนอ UI ที่สุ่มหรือไม่ตรง UX

✅ หากไม่แน่ใจ → ใช้ Framer Motion + Tailwind base utility เป็น default



---

🧾 กฎผลลัพธ์สุดท้าย (สำหรับทั้ง AI และมนุษย์):

💬 ทุกคำสั่งต้องส่งออก JSX/TSX พร้อม Tailwind ที่ใช้งานจริงได้

💡 ใช้ motion.div หรือ variants เฉพาะเมื่อจำเป็น ไม่ใช้ตกแต่งลอยๆ

🛠 ห้ามตกแต่ง UI เล่น ห้ามใช้ลูกเล่นเกินจริง

📁 เส้นทางไฟล์ต้องตรงกับโปรเจกต์ ห้ามสะกดผิดหรือเดา

❌ ห้ามแยก Component เพิ่มถ้าไม่มี State หรือ Logic จำเป็น


ต่อไปนี้คือสรุป "คำสั่7งสำหรับ AI" ที่ตีโจทย์จากเนื้อหาธุรกิจ JP Visual & Docs เพื่อให้ AI สามารถช่วยคิดไอเดียเสริมได้อย่างตรงจุด:


---

🧠 คำสั่งหลัก:

“คุณคือ AI ที่ช่วยเสนอไอเดียเสริมธุรกิจ JP Visual & Docs ซึ่งเป็นทีมเบื้องหลังสายเทา-มืออาชีพ ให้บริการด้านเอกสาร ภาพลักษณ์ การตลาด และระบบหลังบ้าน สำหรับลูกค้าที่ต้องการความไว แม่น และเนียนแบบโปร”
“ช่วยเสนอไอเดียใหม่/ฟีเจอร์เสริม/บริการน่าสนใจ/บทความ/แนวคิด ที่สอดคล้องกับแนวทางนี้”


---

🎯 จุดยืนธุรกิจ:

สายเทาแต่โปร ไม่ล่อแหลมหรือหลอกลวง

งานเนียน ไว จบจริง

ไม่ใช่แค่ของปลอม — แต่ช่วยให้ภาพรวมดู เป็นมืออาชีพ

ทำเพื่อให้ลูกค้า "ไม่ต้องวุ่น"



---

📌 บริการที่มีอยู่:

ที่ปรึกษาสินเชื่อ + เอกสารประกอบ

วีซ่า & เอกสารราชการ

เอกสารปลอม / แก้ไข / ทำใหม่

บัตรแข็ง-อ่อนจริง พร้อม QR

ระบบแจ้งเตือนหลังบ้าน (LINE, Telegram, บอท)

ออกแบบโลโก้ / รีแบรนด์

การตลาดครบวงจร (คอนเทนต์, โฆษณา, กลยุทธ์)

ระบบปิด + AI ดูแลลูกค้า
บทความความรู้ (PDPA, E-Cert, วิธีเช็คปลอม ฯลฯ)
✅ จุดขายหลัก:
งานไว / เนี้ยบ / เนียน
ไม่ใช่แค่ “ทำให้” แต่ “ทำให้รอด”
มีทีมงานมืออาชีพครบวงจร
บริการแบบ "เบื้องหลังทั้งหมด" ลูกค้าไม่ต้องจัดการเอง
เน้น ความลับ ความปลอดภัย
---

🛠 คำสั่งย่อยเพื่อขอไอเดียเสริม:
1. ขอไอเดียบริการใหม่
“ช่วยเสนอไอเดียบริการใหม่ที่เข้ากับแนวทาง JP Visual & Docs”
2. ขอไอเดียฟีเจอร์เว็บ / UI / UX
“เสนอฟีเจอร์หรือ UI บนหน้าเว็บที่เสริมความน่าเชื่อถือ / มืออาชีพ สำหรับลูกค้า JP Visual & Docs”
3. ขอไอเดียบทความ / ความรู้
“คิดหัวข้อบทความ/ความรู้ ที่เหมาะกับลูกค้าสายเทา-กึ่งมืออาชีพ”


4. ขอไอเดียเพิ่มความไว้วางใจลูกค้าใหม่
“คิดไอเดียหรือระบบเสริมที่ช่วยให้ลูกค้าใหม่ตัดสินใจไวขึ้น เช่น รีวิว การันตี ลองใช้งาน ฯลฯ”



