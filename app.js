"use strict";

const SVG_NS = "http://www.w3.org/2000/svg";
const DATA_URL = "building.json";

const VIEW_PADDING = { top: 52, right: 76, bottom: 74, left: 76 };

const NODE_TYPES = ["room", "junction", "exit"];

const TYPE_TEXT = {
  room: "legendRoom",
  junction: "legendJunction",
  exit: "legendExit",
  edge: "typeEdge",
};

const STRINGS = {
  en: {
    docTitle: "Smart Escape | Building Map",
    appTitle: "Smart Escape",
    appSubtitle: "Interactive Building Map",
    building: "Building",
    awaitingData: "Awaiting data",
    nodes: "nodes",
    corridors: "corridors",
    exits: "exits",
    footerNote: "Smart Escape — frontend competition prototype",
    floorPlan: "Floor Plan",
    escapeRoute: "Escape Route",
    hazards: "Hazards",
    legend: "Legend",
    detailsPanel: "Details",
    dataset: "Dataset",
    badgeLoading: "Loading",
    badgeReady: "Ready",
    badgeError: "Error",
    loadingJson: "Loading building.json…",
    errorTitle: "Could not load the building map",
    serveHint:
      'Serve this folder over HTTP (for example <code>python -m http.server</code>) so the JSON file can be fetched.',
    retry: "Retry",
    startLocation: "Start location",
    chooseStart: "Choose a room or junction…",
    clearStart: "Clear start",
    routeHelp: "Click a room or junction on the map, or pick one above.",
    statusLabel: "Status",
    routeLabel: "Route",
    selectedExitLabel: "Selected exit",
    totalCostLabel: "Total cost",
    statusIdle: "No start selected",
    statusFound: "Route found",
    statusNone: "No route available",
    statusBlocked: "Starting location blocked",
    badgeIdle: "Idle",
    badgeFound: "Found",
    badgeNone: "None",
    badgeBlocked: "Blocked",
    badgeHazardNone: "None",
    badgeHazardActive: "Active",
    blockNodeLabel: "Block node (room / junction)",
    blockCorridorLabel: "Block corridor",
    closeExitLabel: "Close exit",
    chooseNode: "Choose a node…",
    chooseCorridor: "Choose a corridor…",
    chooseExit: "Choose an exit…",
    block: "Block",
    unblock: "Unblock",
    close: "Close",
    reopen: "Reopen",
    noActiveHazards: "No active hazards",
    blockedNodesList: "Blocked nodes",
    blockedEdgesList: "Blocked corridors",
    closedExitsList: "Closed exits",
    resetHazards: "Reset hazards",
    importJson: "Import JSON",
    legendRoom: "Room",
    legendRoomDesc: "Start / safe space",
    legendJunction: "Junction",
    legendJunctionDesc: "Corridor crossing",
    legendExit: "Exit",
    legendExitDesc: "Escape point",
    legendCost: "Corridor cost",
    legendCostDesc: "Time to traverse",
    legendRoute: "Escape route",
    legendRouteDesc: "Lowest-cost path",
    legendBlockedNode: "Blocked node",
    legendBlockedNodeDesc: "Cannot be entered",
    legendBlockedCorridor: "Blocked corridor",
    legendBlockedCorridorDesc: "Connection removed",
    legendClosedExit: "Closed exit",
    legendClosedExitDesc: "Not a destination",
    typeEdge: "Corridor",
    detailsHint: "Select a node or corridor on the map to inspect it.",
    nodeIdLabel: "Node ID",
    typeLabel: "Type",
    positionLabel: "Position",
    connectionsLabel: "Connections",
    statusRowLabel: "Status",
    corridorIdLabel: "Corridor ID",
    fromLabel: "From",
    toLabel: "To",
    costLabel: "Cost",
    statusAvailable: "Available",
    statusBlockedShort: "Blocked",
    statusClosed: "Closed",
    sourceLabel: "Source",
    statusShort: "Status",
    metaLoading: "Loading building.json...",
    metaLoaded: "Loaded and validated",
    metaFailed: "Failed to load",
    loadingEllipsis: "Loading…",
    tagStart: "START",
    tagClosed: "CLOSED",
    costWord: "cost",
    costParen: "cost {cost}",
    listSep: " · ",
    switchLang: "Switch language",
    errTopLevel: "Top level of building.json must be an object.",
    errBuilding: 'Missing or empty required field: "building".',
    errNodes: 'Missing required field: "nodes" (must be an array).',
    errEdges: 'Missing required field: "edges" (must be an array).',
    errInitialState: 'Missing required field: "initial_state".',
    errEmptyNodes: '"nodes" must contain at least one node.',
    errNodeObject: "{where} must be an object.",
    errNodeId: '{where} is missing a string "id".',
    errDupNodeId: 'Duplicate node id: "{id}".',
    errNodeLabel: '{where} is missing a string "label".',
    errNodeType: '{where} has unknown type "{type}". Use room, junction or exit.',
    errNodeXY: "{where} needs numeric x and y coordinates.",
    errEdgeObject: "{where} must be an object.",
    errEdgeId: '{where} is missing a string "id".',
    errDupEdgeId: 'Duplicate edge id: "{id}".',
    errEdgeFrom: '{where} references unknown node "{node}".',
    errEdgeTo: '{where} references unknown node "{node}".',
    errEdgeCost: "{where} needs a non-negative numeric cost.",
    errInitialArray: "initial_state.{key} must be an array.",
    errNetwork: "Network error while fetching building.json ({cause}).",
    errHttp: "building.json returned HTTP {status}.",
    errInvalidJson: "building.json is not valid JSON ({cause}).",
    errImportJson: "Selected file is not valid JSON ({cause}).",
    errImportRead: "Could not read the selected file.",
  },
  bn: {
    docTitle: "স্মার্ট এস্কেপ | বিল্ডিং ম্যাপ",
    appTitle: "স্মার্ট এস্কেপ",
    appSubtitle: "ইন্টারঅ্যাকটিভ বিল্ডিং ম্যাপ",
    building: "বিল্ডিং",
    awaitingData: "ডেটা অপেক্ষায়",
    nodes: "নোড",
    corridors: "করিডোর",
    exits: "এক্সিট",
    footerNote: "স্মার্ট এস্কেপ — ফ্রন্টএন্ড প্রতিযোগিতা প্রোটোটাইপ",
    floorPlan: "ফ্লোর প্ল্যান",
    escapeRoute: "এস্কেপ রুট",
    hazards: "হাজার্ড",
    legend: "লিজেন্ড",
    detailsPanel: "বিস্তারিত",
    dataset: "ডেটাসেট",
    badgeLoading: "লোড হচ্ছে",
    badgeReady: "প্রস্তুত",
    badgeError: "ত্রুটি",
    loadingJson: "building.json লোড হচ্ছে…",
    errorTitle: "বিল্ডিং ম্যাপ লোড করা যায়নি",
    serveHint:
      'JSON ফাইল লোড করতে এই ফোল্ডারটি HTTP সার্ভারে চালান (যেমন <code>python -m http.server</code>)।',
    retry: "আবার চেষ্টা",
    startLocation: "শুরুর অবস্থান",
    chooseStart: "কোনো রুম বা জাংশন বেছে নিন…",
    clearStart: "শুরু মুছুন",
    routeHelp: "ম্যাপে কোনো রুম বা জাংশনে ক্লিক করুন, অথবা উপরে থেকে বেছে নিন।",
    statusLabel: "স্ট্যাটাস",
    routeLabel: "রুট",
    selectedExitLabel: "নির্বাচিত এক্সিট",
    totalCostLabel: "মোট খরচ",
    statusIdle: "কোনো শুরু নির্বাচন করা হয়নি",
    statusFound: "রুট পাওয়া গেছে",
    statusNone: "কোনো রুট নেই",
    statusBlocked: "শুরুর অবস্থান ব্লক করা হয়েছে",
    badgeIdle: "নিষ্ক্রিয়",
    badgeFound: "পাওয়া",
    badgeNone: "নেই",
    badgeBlocked: "ব্লক",
    badgeHazardNone: "নেই",
    badgeHazardActive: "সক্রিয়",
    blockNodeLabel: "নোড ব্লক করুন (রুম / জাংশন)",
    blockCorridorLabel: "করিডোর ব্লক করুন",
    closeExitLabel: "এক্সিট বন্ধ করুন",
    chooseNode: "কোনো নোড বেছে নিন…",
    chooseCorridor: "কোনো করিডোর বেছে নিন…",
    chooseExit: "কোনো এক্সিট বেছে নিন…",
    block: "ব্লক",
    unblock: "আনব্লক",
    close: "বন্ধ",
    reopen: "খুলুন",
    noActiveHazards: "কোনো সক্রিয় হাজার্ড নেই",
    blockedNodesList: "ব্লক করা নোড",
    blockedEdgesList: "ব্লক করা করিডোর",
    closedExitsList: "বন্ধ করা এক্সিট",
    resetHazards: "হাজার্ড রিসেট",
    importJson: "JSON ইমপোর্ট",
    legendRoom: "রুম",
    legendRoomDesc: "শুরু / নিরাপদ স্থান",
    legendJunction: "জাংশন",
    legendJunctionDesc: "করিডোর সংযোগ",
    legendExit: "এক্সিট",
    legendExitDesc: "বেরিয়ে যাওয়ার পথ",
    legendCost: "করিডোর খরচ",
    legendCostDesc: "পার হতে সময়",
    legendRoute: "এস্কেপ রুট",
    legendRouteDesc: "ন্যূনতম খরচের পথ",
    legendBlockedNode: "ব্লক করা নোড",
    legendBlockedNodeDesc: "প্রবেশ করা যাবে না",
    legendBlockedCorridor: "ব্লক করা করিডোর",
    legendBlockedCorridorDesc: "সংযোগ বাতিল",
    legendClosedExit: "বন্ধ করা এক্সিট",
    legendClosedExitDesc: "গন্তব্য নয়",
    typeEdge: "করিডোর",
    detailsHint: "তথ্য দেখতে ম্যাপে কোনো নোড বা করিডোর নির্বাচন করুন।",
    nodeIdLabel: "নোড আইডি",
    typeLabel: "ধরন",
    positionLabel: "অবস্থান",
    connectionsLabel: "সংযোগ",
    statusRowLabel: "স্ট্যাটাস",
    corridorIdLabel: "করিডোর আইডি",
    fromLabel: "থেকে",
    toLabel: "পর্যন্ত",
    costLabel: "খরচ",
    statusAvailable: "চালু",
    statusBlockedShort: "ব্লক",
    statusClosed: "বন্ধ",
    sourceLabel: "সোর্স",
    statusShort: "স্ট্যাটাস",
    metaLoading: "building.json লোড হচ্ছে…",
    metaLoaded: "লোড ও যাচাই সম্পন্ন",
    metaFailed: "লোড ব্যর্থ",
    loadingEllipsis: "লোড হচ্ছে…",
    tagStart: "শুরু",
    tagClosed: "বন্ধ",
    costWord: "খরচ",
    costParen: "খরচ {cost}",
    listSep: " · ",
    switchLang: "ভাষা পরিবর্তন",
    errTopLevel: "building.json-এর শীর্ষ স্তর একটি অবজেক্ট হতে হবে।",
    errBuilding: 'প্রয়োজনীয় ফিল্ড "building" নেই বা খালি।',
    errNodes: 'প্রয়োজনীয় ফিল্ড "nodes" নেই (অ্যারে হতে হবে)।',
    errEdges: 'প্রয়োজনীয় ফিল্ড "edges" নেই (অ্যারে হতে হবে)।',
    errInitialState: 'প্রয়োজনীয় ফিল্ড "initial_state" নেই।',
    errEmptyNodes: '"nodes"-এ কমপক্ষে একটি নোড থাকতে হবে।',
    errNodeObject: "{where} একটি অবজেক্ট হতে হবে।",
    errNodeId: '{where}-এ একটি স্ট্রিং "id" নেই।',
    errDupNodeId: 'ডুপ্লিকেট নোড আইডি: "{id}"।',
    errNodeLabel: '{where}-এ একটি স্ট্রিং "label" নেই।',
    errNodeType: '{where}-এ অজানা ধরন "{type}"। room, junction বা exit ব্যবহার করুন।',
    errNodeXY: "{where}-এ সংখ্যাসূচক x ও y সমন্বয় প্রয়োজন।",
    errEdgeObject: "{where} একটি অবজেক্ট হতে হবে।",
    errEdgeId: '{where}-এ একটি স্ট্রিং "id" নেই।',
    errDupEdgeId: 'ডুপ্লিকেট এজ আইডি: "{id}"।',
    errEdgeFrom: '{where} অজানা নোড "{node}" নির্দেশ করে।',
    errEdgeTo: '{where} অজানা নোড "{node}" নির্দেশ করে।',
    errEdgeCost: "{where}-এ ঋণাত্মক-নয় এমন সংখ্যাসূচক খরচ প্রয়োজন।",
    errInitialArray: "initial_state.{key} একটি অ্যারে হতে হবে।",
    errNetwork: "building.json আনতে নেটওয়ার্ক ত্রুটি ({cause})।",
    errHttp: "building.json HTTP {status} ফেরত দিয়েছে।",
    errInvalidJson: "building.json বৈধ JSON নয় ({cause})।",
    errImportJson: "নির্বাচিত ফাইল বৈধ JSON নয় ({cause})।",
    errImportRead: "নির্বাচিত ফাইল পড়া যায়নি।",
  },
};

function t(key, params) {
  const dict = STRINGS[state.lang] || STRINGS.en;
  let text = dict[key] !== undefined ? dict[key] : STRINGS.en[key] !== undefined ? STRINGS.en[key] : key;
  if (params) {
    Object.keys(params).forEach((name) => {
      text = text.split("{" + name + "}").join(String(params[name]));
    });
  }
  return text;
}

function fail(key, params) {
  const error = new Error(t(key, params));
  error.i18nKey = key;
  error.i18nParams = params;
  return error;
}

function errorMessage(error) {
  if (error && error.i18nKey) return t(error.i18nKey, error.i18nParams);
  return error && error.message ? error.message : String(error);
}

function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = t(element.getAttribute("data-i18n-html"));
  });
  document.title = t("docTitle");
}

function setLanguage(lang) {
  state.lang = lang === "bn" ? "bn" : "en";
  document.documentElement.lang = state.lang;

  applyStaticI18n();

  if (state.data) {
    const startValue = ui.startSelect.value;
    const hazardNodeValue = ui.hazardNode.value;
    const hazardEdgeValue = ui.hazardEdge.value;
    const hazardExitValue = ui.hazardExit.value;

    populateStartSelect();
    populateHazardSelects();
    ui.startSelect.value = startValue;
    ui.hazardNode.value = hazardNodeValue;
    ui.hazardEdge.value = hazardEdgeValue;
    ui.hazardExit.value = hazardExitValue;

    renderHeader();
    renderMap();
    paintSelection();
    renderRoute();
    paintRoute();
    paintHazards();
    renderHazardControls();
    renderDetails(state.selection);
  }

  refreshPhaseTexts();

  ui.langBtn.textContent = state.lang === "en" ? "বাং" : "EN";
  ui.langBtn.setAttribute("aria-label", t("switchLang"));
}

function refreshPhaseTexts() {
  if (state.phase === "loading") {
    ui.badge.textContent = t("badgeLoading");
    ui.metaStatus.textContent = t("metaLoading");
  } else if (state.phase === "error") {
    ui.badge.textContent = t("badgeError");
    ui.metaStatus.textContent = t("metaFailed");
    if (state.lastError) ui.errorDetail.textContent = errorMessage(state.lastError);
  } else if (state.phase === "ready") {
    ui.badge.textContent = t("badgeReady");
    ui.metaStatus.textContent = t("metaLoaded");
  }
}

const state = {
  data: null,
  nodeById: new Map(),
  hazards: null,
  selection: null,
  startId: null,
  startBlocked: false,
  route: null,
  eventsBound: false,
  lang: "en",
  phase: null,
  lastError: null,
};

const ui = {};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  cacheUi();
  bindEvents();
  applyStaticI18n();
  showLoading();

  try {
    const raw = await fetchBuildingJson();
    applyDataset(raw, DATA_URL);
    showReady();
  } catch (error) {
    showError(error);
  }
}

function applyDataset(raw, sourceName) {
  const data = validateBuilding(raw);

  state.data = data;
  state.nodeById = new Map(data.nodes.map((node) => [node.id, node]));
  state.selection = null;
  state.startId = null;
  state.startBlocked = false;
  state.route = null;
  initHazards();

  renderHeader();
  renderMap();
  populateStartSelect();
  populateHazardSelects();
  renderDetails(null);
  setStart(null);
  ui.metaSource.textContent = sourceName;
}

function importJsonFile(file) {
  if (!file) return;
  const reader = new FileReader();

  reader.onload = () => {
    showLoading();
    try {
      const raw = JSON.parse(String(reader.result));
      applyDataset(raw, file.name);
      showReady();
    } catch (error) {
      const wrapped =
        error && error.i18nKey
          ? error
          : fail("errImportJson", { cause: error.message });
      showError(wrapped);
    }
  };

  reader.onerror = () => showError(fail("errImportRead", {}));

  try {
    reader.readAsText(file);
  } catch (cause) {
    showError(fail("errImportRead", { cause: cause.message }));
  }
}

/* ---------- ui refs & events ---------- */

function cacheUi() {
  ui.buildingName = document.getElementById("building-name");
  ui.statNodes = document.getElementById("stat-nodes");
  ui.statEdges = document.getElementById("stat-edges");
  ui.statExits = document.getElementById("stat-exits");
  ui.footCount = document.getElementById("foot-count");
  ui.badge = document.getElementById("map-badge");
  ui.loading = document.getElementById("loading-state");
  ui.error = document.getElementById("error-state");
  ui.errorDetail = document.getElementById("error-detail");
  ui.retry = document.getElementById("retry-btn");
  ui.svg = document.getElementById("map-svg");
  ui.details = document.getElementById("details");
  ui.metaStatus = document.getElementById("meta-status");
  ui.startSelect = document.getElementById("start-select");
  ui.clearStart = document.getElementById("clear-start-btn");
  ui.routeBadge = document.getElementById("route-badge");
  ui.routeStatus = document.getElementById("route-status");
  ui.routeSequence = document.getElementById("route-sequence");
  ui.routeExit = document.getElementById("route-exit");
  ui.routeCost = document.getElementById("route-cost");
  ui.hazardBadge = document.getElementById("hazard-badge");
  ui.hazardNode = document.getElementById("hazard-node");
  ui.hazardNodeBtn = document.getElementById("hazard-node-btn");
  ui.hazardEdge = document.getElementById("hazard-edge");
  ui.hazardEdgeBtn = document.getElementById("hazard-edge-btn");
  ui.hazardExit = document.getElementById("hazard-exit");
  ui.hazardExitBtn = document.getElementById("hazard-exit-btn");
  ui.hazardSummary = document.getElementById("hazard-summary");
  ui.hazardReset = document.getElementById("hazard-reset-btn");
  ui.langBtn = document.getElementById("lang-btn");
  ui.importBtn = document.getElementById("import-btn");
  ui.importInput = document.getElementById("import-input");
  ui.metaSource = document.getElementById("meta-source");
  ui.routeResult = document.getElementById("route-result");
  ui.startHelp = document.getElementById("start-help");
}

function bindEvents() {
  if (state.eventsBound) return;
  state.eventsBound = true;

  ui.retry.addEventListener("click", init);

  ui.startSelect.addEventListener("change", () => setStart(ui.startSelect.value));

  ui.clearStart.addEventListener("click", () => setStart(null));

  ui.hazardNode.addEventListener("change", renderHazardControls);
  ui.hazardEdge.addEventListener("change", renderHazardControls);
  ui.hazardExit.addEventListener("change", renderHazardControls);

  ui.hazardNodeBtn.addEventListener("click", () => toggleNodeHazard(ui.hazardNode.value));
  ui.hazardEdgeBtn.addEventListener("click", () => toggleEdgeHazard(ui.hazardEdge.value));
  ui.hazardExitBtn.addEventListener("click", () => toggleExitHazard(ui.hazardExit.value));
  ui.hazardReset.addEventListener("click", resetHazards);

  ui.langBtn.addEventListener("click", () => {
    setLanguage(state.lang === "en" ? "bn" : "en");
  });

  ui.importBtn.addEventListener("click", () => ui.importInput.click());

  ui.importInput.addEventListener("change", () => {
    const file = ui.importInput.files && ui.importInput.files[0];
    if (file) importJsonFile(file);
    ui.importInput.value = "";
  });

  ui.svg.addEventListener("click", (event) => {
    const node = event.target.closest(".node");
    if (node) {
      selectItem("node", node.dataset.id);
      trySetStartFromMap(node.dataset.id);
      return;
    }
    const edge = event.target.closest(".edge");
    if (edge) {
      selectItem("edge", edge.dataset.id);
      return;
    }
    clearSelection();
  });

  ui.svg.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const node = event.target.closest(".node");
    if (!node) return;
    event.preventDefault();
    selectItem("node", node.dataset.id);
    trySetStartFromMap(node.dataset.id);
  });

  ui.svg.addEventListener("mouseover", (event) => {
    const node = event.target.closest(".node");
    if (!node) return;
    highlightIncidentEdges(node.dataset.id, true);
  });

  ui.svg.addEventListener("mouseout", (event) => {
    const node = event.target.closest(".node");
    if (!node) return;
    highlightIncidentEdges(node.dataset.id, false);
  });
}

/* ---------- data ---------- */

async function fetchBuildingJson() {
  let response;
  try {
    response = await fetch(DATA_URL, { cache: "no-store" });
  } catch (cause) {
    throw fail("errNetwork", { cause: cause.message });
  }

  if (!response.ok) {
    throw fail("errHttp", { status: response.status });
  }

  try {
    return await response.json();
  } catch (cause) {
    throw fail("errInvalidJson", { cause: cause.message });
  }
}

function validateBuilding(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw fail("errTopLevel");
  }
  if (typeof raw.building !== "string" || raw.building.trim() === "") {
    throw fail("errBuilding");
  }
  if (!Array.isArray(raw.nodes)) {
    throw fail("errNodes");
  }
  if (!Array.isArray(raw.edges)) {
    throw fail("errEdges");
  }
  if (!raw.initial_state || typeof raw.initial_state !== "object") {
    throw fail("errInitialState");
  }
  if (raw.nodes.length === 0) {
    throw fail("errEmptyNodes");
  }

  const ids = new Set();

  raw.nodes.forEach((node, index) => {
    const where = "nodes[" + index + "]";
    if (!node || typeof node !== "object") {
      throw fail("errNodeObject", { where });
    }
    if (typeof node.id !== "string" || node.id.trim() === "") {
      throw fail("errNodeId", { where });
    }
    if (ids.has(node.id)) {
      throw fail("errDupNodeId", { id: node.id });
    }
    ids.add(node.id);
    if (typeof node.label !== "string" || node.label.trim() === "") {
      throw fail("errNodeLabel", { where });
    }
    if (NODE_TYPES.indexOf(node.type) === -1) {
      throw fail("errNodeType", { where, type: node.type });
    }
    if (!Number.isFinite(node.x) || !Number.isFinite(node.y)) {
      throw fail("errNodeXY", { where });
    }
  });

  const edgeIds = new Set();

  raw.edges.forEach((edge, index) => {
    const where = "edges[" + index + "]";
    if (!edge || typeof edge !== "object") {
      throw fail("errEdgeObject", { where });
    }
    if (typeof edge.id !== "string" || edge.id.trim() === "") {
      throw fail("errEdgeId", { where });
    }
    if (edgeIds.has(edge.id)) {
      throw fail("errDupEdgeId", { id: edge.id });
    }
    edgeIds.add(edge.id);
    if (!ids.has(edge.from)) {
      throw fail("errEdgeFrom", { where, node: edge.from });
    }
    if (!ids.has(edge.to)) {
      throw fail("errEdgeTo", { where, node: edge.to });
    }
    if (!Number.isFinite(edge.cost) || edge.cost < 0) {
      throw fail("errEdgeCost", { where });
    }
  });

  const initial = raw.initial_state;
  ["blocked_nodes", "blocked_edges", "closed_exits"].forEach((key) => {
    if (key in initial && !Array.isArray(initial[key])) {
      throw fail("errInitialArray", { key });
    }
  });

  return {
    building: raw.building.trim(),
    nodes: raw.nodes.map((node) => ({ ...node, label: node.label.trim() })),
    edges: raw.edges.map((edge) => ({ ...edge })),
    initial_state: {
      blocked_nodes: [...(initial.blocked_nodes || [])],
      blocked_edges: [...(initial.blocked_edges || [])],
      closed_exits: [...(initial.closed_exits || [])],
    },
  };
}

/* ---------- states ---------- */

function showLoading() {
  state.phase = "loading";
  state.lastError = null;
  ui.loading.classList.remove("is-hidden");
  ui.error.classList.add("is-hidden");
  ui.svg.classList.add("is-hidden");
  ui.badge.textContent = t("badgeLoading");
  ui.badge.className = "badge badge--loading";
  ui.metaStatus.textContent = t("metaLoading");
}

function showError(error) {
  const message = errorMessage(error);
  state.phase = "error";
  state.lastError = error;
  ui.loading.classList.add("is-hidden");
  ui.svg.classList.add("is-hidden");
  ui.error.classList.remove("is-hidden");
  ui.errorDetail.textContent = message;
  ui.badge.textContent = t("badgeError");
  ui.badge.className = "badge badge--error";
  ui.metaStatus.textContent = t("metaFailed");
  console.error("[Smart Escape] " + message);
}

function showReady() {
  state.phase = "ready";
  state.lastError = null;
  ui.loading.classList.add("is-hidden");
  ui.error.classList.add("is-hidden");
  ui.svg.classList.remove("is-hidden");
  ui.badge.textContent = t("badgeReady");
  ui.badge.className = "badge badge--ready";
  ui.metaStatus.textContent = t("metaLoaded");
}

/* ---------- header ---------- */

function renderHeader() {
  const { nodes, edges } = state.data;
  const exits = nodes.filter((node) => node.type === "exit").length;

  ui.buildingName.textContent = state.data.building;
  ui.statNodes.textContent = nodes.length;
  ui.statEdges.textContent = edges.length;
  ui.statExits.textContent = exits;
  ui.footCount.textContent = [
    nodes.length + " " + t("nodes"),
    edges.length + " " + t("corridors"),
    exits + " " + t("exits"),
  ].join(t("listSep"));
}

/* ---------- map rendering ---------- */

function renderMap() {
  const { nodes, edges } = state.data;
  const viewBox = computeViewBox(nodes);

  clearElement(ui.svg);
  ui.svg.setAttribute("viewBox", viewBox);
  ui.svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

  const edgeLayer = svgElement("g", { class: "layer-edges" });
  const costLayer = svgElement("g", { class: "layer-costs" });
  const nodeLayer = svgElement("g", { class: "layer-nodes" });

  edges.forEach((edge) => {
    const from = state.nodeById.get(edge.from);
    const to = state.nodeById.get(edge.to);
    if (!from || !to) return;

    edgeLayer.appendChild(createEdge(edge, from, to));
    costLayer.appendChild(createCost(edge, from, to));
  });

  nodes.forEach((node) => nodeLayer.appendChild(createNode(node)));

  ui.svg.append(edgeLayer, costLayer, nodeLayer);
}

function computeViewBox(nodes) {
  const xs = nodes.map((node) => node.x);
  const ys = nodes.map((node) => node.y);
  const minX = Math.min(...xs) - VIEW_PADDING.left;
  const minY = Math.min(...ys) - VIEW_PADDING.top;
  const maxX = Math.max(...xs) + VIEW_PADDING.right;
  const maxY = Math.max(...ys) + VIEW_PADDING.bottom;
  return [minX, minY, maxX - minX, maxY - minY].join(" ");
}

function createEdge(edge, from, to) {
  const group = svgElement("g", {
    class: "edge",
    "data-id": edge.id,
    "data-from": edge.from,
    "data-to": edge.to,
  });

  group.appendChild(
    svgElement("line", {
      class: "edge__line",
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y,
    })
  );

  group.appendChild(
    svgElement("line", {
      class: "edge__hit",
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y,
    })
  );

  return group;
}

function createCost(edge, from, to) {
  const group = svgElement("g", {
    class: "edge edge--cost",
    "data-id": edge.id,
    "data-from": edge.from,
    "data-to": edge.to,
  });

  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;

  group.appendChild(
    svgElement("rect", {
      class: "cost__box",
      x: midX - 13,
      y: midY - 11,
      width: 26,
      height: 22,
      rx: 8,
    })
  );

  group.appendChild(
    svgElement("text", {
      class: "cost__text",
      x: midX,
      y: midY,
    }, String(edge.cost))
  );

  return group;
}

function createNode(node) {
  const group = svgElement("g", {
    class: "node node--" + node.type,
    "data-id": node.id,
    transform: "translate(" + node.x + " " + node.y + ")",
    tabindex: "0",
    role: "button",
    "aria-label": nodeAriaLabel(node),
  });

  group.appendChild(nodeShape(node));

  group.appendChild(
    svgElement("text", {
      class: "node__id",
      x: 0,
      y: 1,
    }, node.id)
  );

  group.appendChild(
    svgElement("text", {
      class: "node__label",
      x: 0,
      y: node.type === "junction" ? 34 : 36,
    }, node.label)
  );

  group.appendChild(
    svgElement("text", {
      class: "node__type",
      x: 0,
      y: node.type === "junction" ? 48 : 50,
    }, node.type)
  );

  return group;
}

function nodeShape(node) {
  if (node.type === "room") {
    return svgElement("rect", {
      class: "node__shape",
      x: -24,
      y: -17,
      width: 48,
      height: 34,
      rx: 9,
    });
  }

  if (node.type === "exit") {
    return svgElement("path", {
      class: "node__shape",
      d: "M 0 -20 L 20 0 L 0 20 L -20 0 Z",
    });
  }

  return svgElement("circle", {
    class: "node__shape",
    cx: 0,
    cy: 0,
    r: 17,
  });
}

/* ---------- interaction ---------- */

function selectItem(kind, id) {
  state.selection = { kind, id };
  paintSelection();
  renderDetails(state.selection);
}

function clearSelection() {
  state.selection = null;
  paintSelection();
  renderDetails(null);
}

function paintSelection() {
  ui.svg.querySelectorAll(".is-selected").forEach((el) => el.classList.remove("is-selected"));
  if (!state.selection) return;

  const selector =
    state.selection.kind === "node"
      ? '.node[data-id="' + cssEscape(state.selection.id) + '"]'
      : '.edge[data-id="' + cssEscape(state.selection.id) + '"]';

  ui.svg.querySelectorAll(selector).forEach((el) => el.classList.add("is-selected"));
}

function highlightIncidentEdges(nodeId, on) {
  ui.svg.querySelectorAll(".edge").forEach((group) => {
    if (group.dataset.from === nodeId || group.dataset.to === nodeId) {
      group.classList.toggle("is-lit", on);
    }
  });
}

function cssEscape(value) {
  if (window.CSS && typeof CSS.escape === "function") return CSS.escape(value);
  return String(value).replace(/["\\]/g, "\\$&");
}

/* ---------- details ---------- */

function renderDetails(selection) {
  clearElement(ui.details);

  if (!selection) {
    ui.details.appendChild(el("p", "details__hint", t("detailsHint")));
    return;
  }

  if (selection.kind === "node") {
    renderNodeDetails(state.nodeById.get(selection.id));
    return;
  }

  renderEdgeDetails(state.data.edges.find((edge) => edge.id === selection.id));
}

function renderNodeDetails(node) {
  if (!node) return;

  ui.details.appendChild(el("h3", "details__title", node.label));
  ui.details.appendChild(typeChip(node.type));

  const rows = [
    [t("nodeIdLabel"), node.id],
    [t("typeLabel"), node.type],
    [t("statusRowLabel"), nodeStatus(node)],
    [t("positionLabel"), node.x + ", " + node.y],
    [t("connectionsLabel"), String(incidentEdges(node.id).length)],
  ];
  ui.details.appendChild(detailList(rows));

  const linked = el("ul", "details__list");
  incidentEdges(node.id).forEach((edge) => {
    const otherId = edge.from === node.id ? edge.to : edge.from;
    const other = state.nodeById.get(otherId);
    const item = el("li");
    item.appendChild(el("span", null, other ? other.label : otherId));
    item.appendChild(el("span", null, t("costParen", { cost: edge.cost })));
    linked.appendChild(item);
  });
  ui.details.appendChild(linked);
}

function renderEdgeDetails(edge) {
  if (!edge) return;

  const from = state.nodeById.get(edge.from);
  const to = state.nodeById.get(edge.to);

  ui.details.appendChild(
    el("h3", "details__title", (from ? from.label : edge.from) + " → " + (to ? to.label : edge.to))
  );
  ui.details.appendChild(typeChip("edge"));

  ui.details.appendChild(
    detailList([
      [t("corridorIdLabel"), edge.id],
      [t("fromLabel"), (from ? from.label : edge.from) + " (" + edge.from + ")"],
      [t("toLabel"), (to ? to.label : edge.to) + " (" + edge.to + ")"],
      [t("statusRowLabel"), isEdgeUsable(edge) ? t("statusAvailable") : t("statusBlockedShort")],
      [t("costLabel"), String(edge.cost)],
    ])
  );
}

function nodeStatus(node) {
  if (node.type === "exit" && !isOpenExit(node)) return t("statusClosed");
  if (isBlockedNodeId(node.id)) return t("statusBlockedShort");
  return t("statusAvailable");
}

function incidentEdges(nodeId) {
  return state.data.edges.filter((edge) => edge.from === nodeId || edge.to === nodeId);
}

function typeChip(type) {
  const key = TYPE_TEXT[type];
  return el("span", "details__chip chip--" + type, key ? t(key) : type);
}

function typeWord(type) {
  const key = TYPE_TEXT[type];
  return key ? t(key) : type;
}

function nodeAriaLabel(node) {
  return node.label + ", " + typeWord(node.type) + ", id " + node.id;
}

function detailList(rows) {
  const list = el("dl", "meta");
  rows.forEach(([term, value]) => {
    const row = el("div", "meta__row");
    row.appendChild(el("dt", null, term));
    row.appendChild(el("dd", null, value));
    list.appendChild(row);
  });
  return list;
}

/* ---------- dom helpers ---------- */

function svgElement(tag, attrs = {}, text) {
  const element = document.createElementNS(SVG_NS, tag);
  applyAttrs(element, attrs);
  if (text !== undefined) element.textContent = text;
  return element;
}

function el(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function applyAttrs(element, attrs) {
  Object.entries(attrs).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function clearElement(element) {
  while (element.firstChild) element.removeChild(element.firstChild);
}

/* ---------- availability filters (hazard hooks) ---------- */

function initHazards() {
  const original = state.data.initial_state;
  state.hazards = {
    blocked_nodes: new Set(original.blocked_nodes),
    blocked_edges: new Set(original.blocked_edges),
    closed_exits: new Set(original.closed_exits),
  };
}

function isBlockedNodeId(nodeId) {
  return state.hazards.blocked_nodes.has(nodeId);
}

function isBlockedEdgeId(edgeId) {
  return state.hazards.blocked_edges.has(edgeId);
}

function isClosedExitId(nodeId) {
  return state.hazards.closed_exits.has(nodeId);
}

function isOpenExit(node) {
  return (
    node.type === "exit" &&
    !isClosedExitId(node.id) &&
    !isBlockedNodeId(node.id)
  );
}

function isNodeUsable(node) {
  return !!node && !isBlockedNodeId(node.id) && !isClosedExitId(node.id);
}

function isEdgeUsable(edge) {
  if (isBlockedEdgeId(edge.id)) return false;
  return (
    isNodeUsable(state.nodeById.get(edge.from)) &&
    isNodeUsable(state.nodeById.get(edge.to))
  );
}

function activeHazards() {
  return {
    blocked_nodes: [...state.hazards.blocked_nodes].sort(compareIds),
    blocked_edges: [...state.hazards.blocked_edges].sort(compareIds),
    closed_exits: [...state.hazards.closed_exits].sort(compareIds),
  };
}

function activeHazardCount() {
  return (
    state.hazards.blocked_nodes.size +
    state.hazards.blocked_edges.size +
    state.hazards.closed_exits.size
  );
}

function isStartEligible(node) {
  if (!node) return false;
  if (node.type !== "room" && node.type !== "junction") return false;
  return !isBlockedNodeId(node.id);
}

function eligibleStartNodes() {
  return state.data.nodes
    .filter(isStartEligible)
    .sort((a, b) => compareIds(a.id, b.id));
}

/* ---------- start selection ---------- */

function populateStartSelect() {
  clearElement(ui.startSelect);
  ui.startSelect.appendChild(new Option(t("chooseStart"), ""));
  eligibleStartNodes().forEach((node) => {
    ui.startSelect.appendChild(new Option(node.label + " (" + node.id + ")", node.id));
  });
}

function trySetStartFromMap(nodeId) {
  const node = state.nodeById.get(nodeId);
  if (!isStartEligible(node)) return;
  setStart(nodeId);
}

function setStart(nodeId) {
  const node = nodeId ? state.nodeById.get(nodeId) : null;
  state.startId = isStartEligible(node) ? node.id : null;
  ui.startSelect.value = state.startId || "";
  updateRoute();
}

function updateRoute() {
  state.startBlocked = !!state.startId && isBlockedNodeId(state.startId);

  if (!state.startId || state.startBlocked) {
    state.route = null;
  } else {
    state.route = findBestRoute(state.startId);
  }

  renderRoute();
  paintRoute();
  paintHazards();
  renderHazardControls();
  if (state.selection) renderDetails(state.selection);
}

/* ---------- routing: Dijkstra ---------- */

function buildGraph() {
  const graph = new Map();

  state.data.nodes.forEach((node) => {
    if (!isNodeUsable(node)) return;
    graph.set(node.id, []);
  });

  state.data.edges.forEach((edge) => {
    if (isBlockedEdgeId(edge.id)) return;
    if (!graph.has(edge.from) || !graph.has(edge.to)) return;
    graph.get(edge.from).push({ to: edge.to, cost: edge.cost, edgeId: edge.id });
    graph.get(edge.to).push({ to: edge.from, cost: edge.cost, edgeId: edge.id });
  });

  return graph;
}

function dijkstra(graph, startId) {
  const dist = new Map();
  const done = new Set();

  graph.forEach((_, id) => dist.set(id, Infinity));
  if (!dist.has(startId)) return dist;
  dist.set(startId, 0);

  while (done.size < dist.size) {
    let current = null;
    let best = Infinity;

    dist.forEach((d, id) => {
      if (!done.has(id) && d < best) {
        best = d;
        current = id;
      }
    });

    if (current === null) break;
    done.add(current);

    const base = dist.get(current);
    for (const link of graph.get(current)) {
      const next = base + link.cost;
      if (next < dist.get(link.to)) {
        dist.set(link.to, next);
      }
    }
  }

  return dist;
}

function findBestRoute(startId) {
  const graph = buildGraph();
  if (!graph.has(startId)) return null;

  const distStart = dijkstra(graph, startId);

  let bestExit = null;
  let bestCost = Infinity;

  state.data.nodes.forEach((node) => {
    if (!isOpenExit(node)) return;
    const d = distStart.get(node.id);
    if (!Number.isFinite(d)) return;
    if (d < bestCost || (d === bestCost && compareIds(node.id, bestExit) < 0)) {
      bestCost = d;
      bestExit = node.id;
    }
  });

  if (bestExit === null) return null;

  const distExit = dijkstra(graph, bestExit);
  const path = reconstructPath(graph, startId, bestExit, distStart, distExit, bestCost);
  if (!path) return null;

  return {
    path,
    exitId: bestExit,
    totalCost: bestCost,
    edgeIds: pathToEdgeIds(path),
  };
}

function reconstructPath(graph, startId, exitId, distStart, distExit, totalCost) {
  const path = [startId];
  const used = new Set([startId]);

  function walk(current) {
    if (current === exitId) return true;

    const candidates = (graph.get(current) || [])
      .filter(
        (link) =>
          !used.has(link.to) &&
          distStart.get(current) + link.cost + distExit.get(link.to) === totalCost
      )
      .sort((a, b) => compareIds(a.to, b.to));

    for (const link of candidates) {
      used.add(link.to);
      path.push(link.to);
      if (walk(link.to)) return true;
      path.pop();
      used.delete(link.to);
    }

    return false;
  }

  return walk(startId) ? path : null;
}

function pathToEdgeIds(path) {
  const ids = [];
  for (let i = 0; i < path.length - 1; i += 1) {
    const edgeId = edgeIdBetween(path[i], path[i + 1]);
    if (edgeId) ids.push(edgeId);
  }
  return ids;
}

function edgeIdBetween(a, b) {
  const edge = state.data.edges.find(
    (e) => (e.from === a && e.to === b) || (e.from === b && e.to === a)
  );
  return edge ? edge.id : null;
}

function compareIds(a, b) {
  if (a === b) return 0;
  return a < b ? -1 : 1;
}

/* ---------- route display ---------- */

function renderRoute() {
  const route = state.route;

  if (!state.startId) {
    ui.routeBadge.textContent = t("badgeIdle");
    ui.routeBadge.className = "badge badge--idle";
    setResultState("idle");
    setRouteField(ui.routeStatus, t("statusIdle"), "is-idle");
    setRouteField(ui.routeSequence, "—", null);
    setRouteField(ui.routeExit, "—", null);
    setRouteField(ui.routeCost, "—", null);
    return;
  }

  if (state.startBlocked) {
    ui.routeBadge.textContent = t("badgeBlocked");
    ui.routeBadge.className = "badge badge--blocked";
    setResultState("blocked");
    setRouteField(ui.routeStatus, t("statusBlocked"), "is-blocked");
    setRouteField(ui.routeSequence, "—", null);
    setRouteField(ui.routeExit, "—", null);
    setRouteField(ui.routeCost, "—", null);
    return;
  }

  if (!route) {
    ui.routeBadge.textContent = t("badgeNone");
    ui.routeBadge.className = "badge badge--none";
    setResultState("none");
    setRouteField(ui.routeStatus, t("statusNone"), "is-none");
    setRouteField(ui.routeSequence, "—", null);
    setRouteField(ui.routeExit, "—", null);
    setRouteField(ui.routeCost, "—", null);
    return;
  }

  const exitNode = state.nodeById.get(route.exitId);

  ui.routeBadge.textContent = t("badgeFound");
  ui.routeBadge.className = "badge badge--found";
  setResultState("ok");
  setRouteField(ui.routeStatus, t("statusFound"), "is-ok");
  setRouteField(ui.routeSequence, route.path.join(" → "), null);
  setRouteField(
    ui.routeExit,
    route.exitId + (exitNode ? " (" + exitNode.label + ")" : ""),
    null
  );
  setRouteField(ui.routeCost, String(route.totalCost), null);
}

function setResultState(name) {
  ["ok", "none", "idle", "blocked"].forEach((key) => {
    ui.routeResult.classList.toggle("is-" + key, key === name);
  });
}

function setRouteField(element, text, stateClass) {
  const changed = element.textContent !== text;
  element.textContent = text;
  element.className = stateClass || "";
  if (changed) {
    element.classList.remove("is-changed");
    void element.offsetWidth;
    element.classList.add("is-changed");
  }
}

function paintRoute() {
  const route = state.route;
  const routeEdgeIds = new Set(route ? route.edgeIds : []);
  const routeNodeIds = new Set(route ? route.path : []);

  ui.svg.querySelectorAll(".edge").forEach((group) => {
    const onRoute = !!route && routeEdgeIds.has(group.dataset.id);
    setClass(group, "is-route", onRoute);
    setClass(group, "is-dimmed", !!route && !onRoute);
  });

  ui.svg.querySelectorAll(".node").forEach((group) => {
    setClass(group, "is-route", routeNodeIds.has(group.dataset.id));
    setClass(group, "is-route-exit", !!route && group.dataset.id === route.exitId);
    setClass(group, "is-start", !!route && group.dataset.id === route.path[0]);
  });

  const startId = route ? route.path[0] : null;
  const startGroup = startId
    ? ui.svg.querySelector('.node[data-id="' + cssEscape(startId) + '"]')
    : null;
  ui.svg.querySelectorAll(".node__start-tag").forEach((tag) => {
    if (!startGroup || tag.parentNode !== startGroup) tag.remove();
  });
  if (startGroup) ensureMapTag(startGroup, "node__start-tag", t("tagStart"));
}

function setClass(element, className, on) {
  if (!element) return;
  if (on) element.classList.add(className);
  else element.classList.remove(className);
}

function ensureMapTag(group, className, text) {
  let tag = group.querySelector("." + className);
  if (!tag) {
    tag = svgElement("text", { class: className, x: 0, y: -34 }, text);
    group.appendChild(tag);
  } else if (tag.textContent !== text) {
    tag.textContent = text;
  }
}

/* ---------- hazard management ---------- */

function populateHazardSelects() {
  fillSelect(
    ui.hazardNode,
    t("chooseNode"),
    state.data.nodes
      .filter((node) => node.type === "room" || node.type === "junction")
      .map((node) => ({ value: node.id, label: node.id + " · " + node.label }))
  );
  fillSelect(
    ui.hazardEdge,
    t("chooseCorridor"),
    state.data.edges.map((edge) => ({
      value: edge.id,
      label: edge.id + " · " + edge.from + " ↔ " + edge.to + " (" + t("costParen", { cost: edge.cost }) + ")",
    }))
  );
  fillSelect(
    ui.hazardExit,
    t("chooseExit"),
    state.data.nodes
      .filter((node) => node.type === "exit")
      .map((node) => ({ value: node.id, label: node.id + " · " + node.label }))
  );
}

function fillSelect(select, placeholder, items) {
  clearElement(select);
  select.appendChild(new Option(placeholder, ""));
  items.forEach((item) => select.appendChild(new Option(item.label, item.value)));
}

function toggleNodeHazard(nodeId) {
  if (!nodeId || !state.nodeById.has(nodeId)) return;
  const node = state.nodeById.get(nodeId);
  if (node.type === "exit") return;

  if (state.hazards.blocked_nodes.has(nodeId)) {
    state.hazards.blocked_nodes.delete(nodeId);
  } else {
    state.hazards.blocked_nodes.add(nodeId);
  }

  updateRoute();
}

function toggleEdgeHazard(edgeId) {
  if (!edgeId || !state.data.edges.some((edge) => edge.id === edgeId)) return;

  if (state.hazards.blocked_edges.has(edgeId)) {
    state.hazards.blocked_edges.delete(edgeId);
  } else {
    state.hazards.blocked_edges.add(edgeId);
  }

  updateRoute();
}

function toggleExitHazard(exitId) {
  const node = state.nodeById.get(exitId);
  if (!node || node.type !== "exit") return;

  if (state.hazards.closed_exits.has(exitId)) {
    state.hazards.closed_exits.delete(exitId);
  } else {
    state.hazards.closed_exits.add(exitId);
  }

  updateRoute();
}

function resetHazards() {
  initHazards();
  updateRoute();
}

function renderHazardControls() {
  if (!state.hazards) return;

  const nodeId = ui.hazardNode.value;
  const edgeId = ui.hazardEdge.value;
  const exitId = ui.hazardExit.value;

  const nodeBlocked = !!nodeId && state.hazards.blocked_nodes.has(nodeId);
  const edgeBlocked = !!edgeId && state.hazards.blocked_edges.has(edgeId);
  const exitClosed = !!exitId && state.hazards.closed_exits.has(exitId);

  ui.hazardNodeBtn.disabled = !nodeId;
  ui.hazardNodeBtn.textContent = nodeBlocked ? t("unblock") : t("block");
  ui.hazardNodeBtn.classList.toggle("is-on", nodeBlocked);

  ui.hazardEdgeBtn.disabled = !edgeId;
  ui.hazardEdgeBtn.textContent = edgeBlocked ? t("unblock") : t("block");
  ui.hazardEdgeBtn.classList.toggle("is-on", edgeBlocked);

  ui.hazardExitBtn.disabled = !exitId;
  ui.hazardExitBtn.textContent = exitClosed ? t("reopen") : t("close");
  ui.hazardExitBtn.classList.toggle("is-on", exitClosed);

  const active = activeHazards();
  const count = activeHazardCount();

  ui.hazardBadge.textContent = count > 0 ? t("badgeHazardActive") : t("badgeHazardNone");
  ui.hazardBadge.className = "badge " + (count > 0 ? "badge--blocked" : "badge--idle");

  if (count === 0) {
    ui.hazardSummary.textContent = t("noActiveHazards");
    ui.hazardSummary.classList.remove("is-active");
    return;
  }

  const parts = [];
  if (active.blocked_nodes.length) {
    parts.push(t("blockedNodesList") + ": " + active.blocked_nodes.join(", "));
  }
  if (active.blocked_edges.length) {
    parts.push(t("blockedEdgesList") + ": " + active.blocked_edges.join(", "));
  }
  if (active.closed_exits.length) {
    parts.push(t("closedExitsList") + ": " + active.closed_exits.join(", "));
  }

  ui.hazardSummary.textContent = parts.join(t("listSep"));
  ui.hazardSummary.classList.add("is-active");
}

function paintHazards() {
  if (!state.hazards) return;

  state.data.nodes.forEach((node) => {
    const group = ui.svg.querySelector('.node[data-id="' + cssEscape(node.id) + '"]');
    if (!group) return;

    const closedExit = node.type === "exit" && !isOpenExit(node);
    setClass(group, "is-closed-exit", closedExit);
    setClass(group, "is-blocked", !closedExit && isBlockedNodeId(node.id));

    if (closedExit) {
      ensureMapTag(group, "node__closed-tag", t("tagClosed"));
    } else {
      group.querySelectorAll(".node__closed-tag").forEach((tag) => tag.remove());
    }
  });

  state.data.edges.forEach((edge) => {
    const usable = isEdgeUsable(edge);
    ui.svg
      .querySelectorAll('.edge[data-id="' + cssEscape(edge.id) + '"]')
      .forEach((group) => setClass(group, "is-blocked", !usable));
  });

  ui.svg
    .querySelectorAll(".node")
    .forEach((group) => {
      if (!state.nodeById.has(group.dataset.id)) {
        setClass(group, "is-blocked", false);
        setClass(group, "is-closed-exit", false);
        group.querySelectorAll(".node__closed-tag").forEach((tag) => tag.remove());
      }
    });
  ui.svg.querySelectorAll(".edge").forEach((group) => {
    if (!state.data.edges.some((edge) => edge.id === group.dataset.id)) {
      setClass(group, "is-blocked", false);
    }
  });
}
