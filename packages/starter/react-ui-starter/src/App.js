import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

function App() {
    return (
        <div
            style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <CrossmintPayButton
                collectionTitle="<TITLE_FOR_YOUR_COLLECTION>"
                collectionDescription="<DESCRIPTION_OF_YOUR_COLLECTION>"
                collectionPhoto="<OPT_URL_TO_PHOTO_COVER>"
                clientId="<YOUR_CLIENT_ID>"
            />
        </div>
    );
}

export default App;
