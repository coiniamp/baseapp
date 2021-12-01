const hostUrl = window.location.hostname === 'localhost' ? 'http://localhost:9002' : window.location.origin;
const protocolSSL = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
const rangerHostUrl =  window.location.hostname === 'localhost' ? 'ws://localhost:9003' : `${protocolSSL}${window.location.hostname}`;

export const defaultConfig: Config = {
    api: {
        authUrl: `${hostUrl}/api/v2/barong`,
        tradeUrl: `${hostUrl}/api/v2/peatio`,
        applogicUrl: `${hostUrl}/api/v2/applogic`,
        rangerUrl: `${rangerHostUrl}/api/v2/ranger`,
        finexUrl: `${hostUrl}/api/v2/finex`,
        p2pUrl: `${hostUrl}/api/v2/p2p`,
    },
    finex: false,
    withCredentials: false,
    incrementalOrderBook: false,
    isResizable: false,
    isDraggable: false,
    showLanding: true,
    sentryEnabled: false,
    captchaLogin: false,
    usernameEnabled: false,
    gaTrackerKey: '',
    minutesUntilAutoLogout: '5',
    msAlertDisplayTime: '5000',
    msPricesUpdates: '1000',
    sessionCheckInterval: '15000',
    balancesFetchInterval: '3000',
    passwordEntropyStep: '14',
    storage: {
        defaultStorageLimit: '50',
        orderBookSideLimit: '25'
    },
    languages: ['en', 'ru'],
    kycSteps: [
        'email',
        'phone',
        'profile',
        'document',
        'address'
    ],
    captcha_type: 'none',
    password_min_entropy: 0,
    wizard_step: 'false',
    barong_upload_size_min_range: '1',
    barong_upload_size_max_range: '20',
    themeSwitcher: 'visible',
    peatio_platform_currency: 'usdt',
    useSharedLayout: 'false',
};

export const Coiniamp = {
    config: defaultConfig,
};

Coiniamp.config = { ...defaultConfig, ...window.env };
Coiniamp.config.storage = { ...defaultConfig.storage, ...Coiniamp.config.storage };

const convertToBoolean = (value: any): boolean => {
    return String(value) === 'true';
}

export const tradeUrl = () => Coiniamp.config.api.tradeUrl;
export const authUrl = () => Coiniamp.config.api.authUrl;
export const applogicUrl = () => Coiniamp.config.api.applogicUrl;
export const rangerUrl = () => Coiniamp.config.api.rangerUrl;
export const finexUrl = () => Coiniamp.config.api.finexUrl || tradeUrl();
export const p2pUrl = () => Coiniamp.config.api.p2pUrl;
export const withCredentials = () => convertToBoolean(Coiniamp.config.withCredentials);
export const incrementalOrderBook = () => convertToBoolean(Coiniamp.config.incrementalOrderBook);
export const isResizableGrid = () => convertToBoolean(Coiniamp.config.isResizable);
export const isDraggableGrid = () => convertToBoolean(Coiniamp.config.isDraggable);
export const isFinexEnabled = () => convertToBoolean(Coiniamp.config.finex);
export const showLanding = () => convertToBoolean(Coiniamp.config.showLanding);
export const sentryEnabled = () => convertToBoolean(Coiniamp.config.sentryEnabled);
export const captchaLogin = () => convertToBoolean(Coiniamp.config.captchaLogin);
export const minutesUntilAutoLogout = () => Coiniamp.config.minutesUntilAutoLogout;
export const sessionCheckInterval = () => Coiniamp.config.sessionCheckInterval;
export const balancesFetchInterval = () => Coiniamp.config.balancesFetchInterval;
export const gaTrackerKey = () => Coiniamp.config.gaTrackerKey;
export const msAlertDisplayTime = () => Coiniamp.config.msAlertDisplayTime;
export const msPricesUpdates = () => Coiniamp.config.msPricesUpdates;
export const defaultStorageLimit = () => Number(Coiniamp.config.storage.defaultStorageLimit);
export const orderBookSideLimit = () => Number(Coiniamp.config.storage.orderBookSideLimit);
export const passwordEntropyStep = () => Number(Coiniamp.config.passwordEntropyStep);
export const languages = (Coiniamp.config.languages && Coiniamp.config.languages.length > 0) ? Coiniamp.config.languages : ['en'];
export const kycSteps = () => Coiniamp.config.kycSteps;
export const isUsernameEnabled = () => convertToBoolean(Coiniamp.config.usernameEnabled);
export const captchaType = () => Coiniamp.config.captcha_type;
export const captchaId = () => Coiniamp.config.captcha_id;
export const passwordMinEntropy = () => Number(Coiniamp.config.password_min_entropy);
export const wizardStep = () => String(Coiniamp.config.wizard_step || '1');
export const barongUploadSizeMinRange = Number(Coiniamp.config.barong_upload_size_min_range || '1');
export const barongUploadSizeMaxRange = Number(Coiniamp.config.barong_upload_size_max_range || '20');
export const themeSwitcher = () => Coiniamp.config.themeSwitcher;
export const platformCurrency = () => Coiniamp.config.peatio_platform_currency.toUpperCase();
export const useSharedLayout = () => convertToBoolean(Coiniamp.config.useSharedLayout);
