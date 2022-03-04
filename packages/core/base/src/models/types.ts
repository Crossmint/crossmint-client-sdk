export enum clientNames {
    reactUi = "client-sdk-react-ui",
}

export enum baseUrls {
    prod = "https://www.crossmint.io",
    dev = "http://localhost:3001",
}

export enum customHeaders {
    clientVersion = "X-Client-Version",
    clientName = "X-Client-Name",
}

enum theme {
    light = "light",
    dark = "dark",
}

export enum mintingContractTypes {
    CANDY_MACHINE = "candy-machine",
    SOLANA_AUCTION = "solana-auction",
    ERC_721 = "erc-721",
}

export enum onboardingRequestStatusResponse {
    WAITING_SUBMISSION = "waiting-submission",
    PENDING = "pending",
    REJECTED = "rejected",
    ACCEPTED = "accepted",
    INVALID = "invalid",
}

export interface PayButtonConfig {
    type: string;

    [propName: string]: any;
}

export interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    tabIndex?: number;
    clientId: string;
    auctionId?: string;
    theme?: theme;
    development?: boolean;
}

export interface CrossmintPayButtonProps extends BaseButtonProps {
    collectionTitle?: string;
    collectionDescription?: string;
    collectionPhoto?: string;
    mintTo?: string;
    emailTo?: string;
    listingId?: string;
    showOverlay?: boolean;
    hideMintOnInactiveClient?: boolean;
    mintConfig?: PayButtonConfig;
}