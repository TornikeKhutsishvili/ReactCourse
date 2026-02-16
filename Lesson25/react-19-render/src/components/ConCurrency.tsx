import React, {
  useCallback,
  // useDeferredValue,
  useMemo,
  useState,
  useTransition,
  type ChangeEvent,
} from "react";
import type { IPhoto } from "../interfaces/photos.interface";

const ConCurrency: React.FC = () => {
  const [photosList, setPhotosList] = useState<IPhoto[]>([]);
  const [value, setValue] = useState("");

  // const deffered = useDeferredValue("");

  const [filtering, setFiltering] = useState("");
  const [isPending, startTransition] = useTransition();

  // value State without Transition: filtering State
  // const filterdData = useMemo(() => {
  //   return photosList.filter((photo) =>
  //     photo.title.toLowerCase().includes(value.toLowerCase()),
  //   );
  // }, [value, photosList]);

  // value State with fDeffered: filtering State
  // const filterdDataDeffered = useMemo(() => {
  //   return photosList.filter((photo) =>
  //     photo.title.toLowerCase().includes(deffered.toLowerCase()),
  //   );
  // }, [deffered, photosList]);

  // value State with Transition: filtering State
  const filterdData = useMemo(() => {
    return photosList.filter((photo) =>
      photo.title.toLowerCase().includes(filtering.toLowerCase()),
    );
  }, [filtering, photosList]);

  const updateState = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPhotosList(json);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => console.log("Fetch operation completed"));
  }, []);

  const showData = () => {
    updateState();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
    startTransition(() => {
      setFiltering(e.target.value);
    });
  };

  const unfetched = () => {
    setPhotosList([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Concurrent Mode Example</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        {/* Show Data */}
        {photosList.length > 0 ? (
          <button onClick={unfetched} type="button">
            Unfetch Data
          </button>
        ) : (
          <button onClick={showData} type="button">
            Fetch Data
          </button>
        )}

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={onChangeHandler}
          placeholder="Filtering data..."
        />
      </div>

      {/* Data of Photos */}
      <div>
        {filterdData.length > 0
          ? `Loaded ${filterdData.length} photos`
          : "No photos loaded yet"}
      </div>

      {isPending && <div>Loading . . .</div>}

      {/* Data */}
      {filterdData.length > 0 && (
        <div>
          {filterdData.map(({ id, title, url, thumbnailUrl }) => (
            <div key={id}>
              <ul>
                <li>{title}</li>
              </ul>
              <img src={url} alt={thumbnailUrl} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConCurrency;
