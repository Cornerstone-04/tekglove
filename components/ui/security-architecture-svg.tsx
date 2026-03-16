"use client";

export default function SecurityArchitectureSVG() {
  return (
    <svg
      width="100%"
      viewBox="0 0 680 500"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TekGlove personal security architecture"
    >
      <defs>
        <marker
          id="sa-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="#f97316"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>

        <style>{`
          @keyframes sa-dash {
            to { stroke-dashoffset: -24; }
          }
          .sa-line {
            stroke-dasharray: 4 8;
            animation: sa-dash 1.8s linear infinite;
          }
          .sa-dot {
            animation: sa-pulse 2s ease-in-out infinite;
          }
          @keyframes sa-pulse {
            0%, 100% { opacity: 1; r: 5; }
            50% { opacity: 0.4; r: 7; }
          }
          .label-text {
            font-family: 'DM Mono', monospace;
            font-size: 13px;
            font-weight: 600;
            fill: #9ca3af;
          }
          .node-title {
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 1.5px;
            fill: #ffffff;
          }
        `}</style>
      </defs>

      {/* ── TOP LEFT: DRONE UNIT ── */}
      <rect
        x={40}
        y={40}
        width={200}
        height={100}
        rx={4}
        fill="#0a0a0a"
        stroke="#333"
        strokeWidth={0.5}
      />
      <g transform="translate(120 55) scale(0.9)">
        <circle
          cx={10}
          cy={10}
          r={3}
          fill="none"
          stroke="#f97316"
          strokeWidth={1.2}
        />
        <circle
          cx={34}
          cy={10}
          r={3}
          fill="none"
          stroke="#f97316"
          strokeWidth={1.2}
        />
        <circle
          cx={10}
          cy={34}
          r={3}
          fill="none"
          stroke="#f97316"
          strokeWidth={1.2}
        />
        <circle
          cx={34}
          cy={34}
          r={3}
          fill="none"
          stroke="#f97316"
          strokeWidth={1.2}
        />
        <rect
          x={18}
          y={18}
          width={8}
          height={8}
          rx={2}
          fill="none"
          stroke="#f97316"
          strokeWidth={1.2}
        />
      </g>
      <text x={140} y={115} textAnchor="middle" className="node-title">
        DRONE UNIT
      </text>

      {/* ── TOP RIGHT: AR SMART GLASSES ── */}
      <rect
        x={440}
        y={40}
        width={200}
        height={100}
        rx={4}
        fill="#0a0a0a"
        stroke="#333"
        strokeWidth={0.5}
      />
      <g transform="translate(520 55) scale(0.9)">
        <rect
          x={0}
          y={6}
          width={16}
          height={9}
          rx={2}
          fill="none"
          stroke="#f97316"
          strokeWidth={1.2}
        />
        <rect
          x={20}
          y={6}
          width={16}
          height={9}
          rx={2}
          fill="none"
          stroke="#f97316"
          strokeWidth={1.2}
        />
        <line
          x1={16}
          y1={10.5}
          x2={20}
          y2={10.5}
          stroke="#f97316"
          strokeWidth={1.2}
        />
      </g>
      <text x={540} y={115} textAnchor="middle" className="node-title">
        AR SMART GLASSES
      </text>

      {/* ── BOTTOM LEFT: SMART GLOVES ── */}
      <rect x={40} y={360} width={200} height={100} rx={4} fill="#f97316" />
      <g transform="translate(120 370) scale(0.9)">
        <path
          d="M10 30 L10 14 C10 12.5 11 11.5 12.2 11.5 C13.4 11.5 14.2 12.5 14.2 14 L14.2 22 L16 22 L16 10.5 C16 9 17 8 18.2 8 C19.4 8 20.2 9 20.2 10.5 L20.2 22 L22 22 L22 12 C22 10.7 23 9.8 24.2 9.8 C25.4 9.8 26.2 10.7 26.2 12 L26.2 23 L28 23 L28 15 C28 13.8 28.8 13 30 13 C31.2 13 32 13.8 32 15 L32 26 C32 30 29 33 24 35 L17 37 C13 38 10 35 10 30Z"
          fill="none"
          stroke="#000"
          strokeWidth={1.5}
        />
      </g>
      <text
        x={140}
        y={435}
        textAnchor="middle"
        className="node-title"
        fill="#000"
      >
        SMART GLOVES
      </text>

      {/* ── BOTTOM RIGHT: PHONE HUB ── */}
      <rect
        x={440}
        y={360}
        width={200}
        height={100}
        rx={4}
        fill="#0a0a0a"
        stroke="#333"
        strokeWidth={0.5}
      />
      <g transform="translate(528 372) scale(0.8)">
        <rect
          x={0}
          y={0}
          width={26}
          height={34}
          rx={4}
          fill="none"
          stroke="#f97316"
          strokeWidth={1.5}
        />
        <circle cx={13} cy={30} r={1.5} fill="#f97316" />
      </g>
      <text x={540} y={435} textAnchor="middle" className="node-title">
        PHONE HUB
      </text>

      {/* ── UPDATED CONNECTIONS ── */}

      {/* Drone -> Glasses (Video/Telemetry) */}
      <path
        d="M240 70 H440"
        stroke="#f97316"
        strokeWidth="1.5"
        className="sa-line"
        markerEnd="url(#sa-arrow)"
      />
      <text x={340} y={60} textAnchor="middle" className="label-text">
        VIDEO &amp; TELEMETRY
      </text>

      {/* Drone -> Gloves (Video & Telemetry) */}
      <path
        d="M90 140 V360"
        stroke="#f97316"
        strokeWidth="1.5"
        className="sa-line"
        markerEnd="url(#sa-arrow)"
      />
      <path
        d="M140 140 V360"
        stroke="#f97316"
        strokeWidth="1.5"
        className="sa-line"
        markerEnd="url(#sa-arrow)"
      />
      <text
        x={75}
        y={250}
        textAnchor="middle"
        className="label-text"
        transform="rotate(-90 75 250)"
      >
        VIDEO
      </text>
      <text
        x={158}
        y={250}
        textAnchor="middle"
        className="label-text"
        transform="rotate(-90 158 250)"
      >
        TELEMETRY
      </text>

      {/* Drone -> Phone Hub (Voice/Direct) - NEW DIAGONAL CONNECTION */}
      <path
        d="M210 140 L450 360"
        stroke="#f97316"
        strokeWidth="1.5"
        strokeOpacity="0.6"
        className="sa-line"
        markerEnd="url(#sa-arrow)"
      />
      <text
        x={315}
        y={240}
        textAnchor="middle"
        className="label-text"
        transform="rotate(42 315 240)"
      >
        VOICE
      </text>

      {/* Gloves -> Phone Hub (Control) */}
      <path
        d="M240 410 H440"
        stroke="#f97316"
        strokeWidth="1.5"
        className="sa-line"
        markerEnd="url(#sa-arrow)"
      />
      <text x={340} y={400} textAnchor="middle" className="label-text">
        CONTROL
      </text>

      {/* Phone Hub <-> AR Glasses (Alerts & Control) */}
      <path
        d="M510 360 V140"
        stroke="#f97316"
        strokeWidth="1.5"
        className="sa-line"
        markerEnd="url(#sa-arrow)"
      />
      <path
        d="M570 140 V360"
        stroke="#f97316"
        strokeWidth="1.5"
        className="sa-line"
        markerEnd="url(#sa-arrow)"
      />
      <text
        x={495}
        y={250}
        textAnchor="middle"
        className="label-text"
        transform="rotate(-90 495 250)"
      >
        CONTROL
      </text>
      <text
        x={588}
        y={250}
        textAnchor="middle"
        className="label-text"
        transform="rotate(-90 588 250)"
      >
        ALERTS &amp; DATA
      </text>

      {/* Corner brackets */}
      <path
        d="M8 8 L8 32 M8 8 L32 8"
        fill="none"
        stroke="#ffffff18"
        strokeWidth={1}
      />
      <path
        d="M672 8 L672 32 M672 8 L648 8"
        fill="none"
        stroke="#ffffff18"
        strokeWidth={1}
      />
      <path
        d="M8 492 L8 468 M8 492 L32 492"
        fill="none"
        stroke="#ffffff18"
        strokeWidth={1}
      />
      <path
        d="M672 492 L672 468 M672 492 L648 492"
        fill="none"
        stroke="#ffffff18"
        strokeWidth={1}
      />
    </svg>
  );
}
