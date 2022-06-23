import { Link } from "@remix-run/react";
import { useUnityContext, Unity } from "react-unity-webgl";

export default function GamePage() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/unity/test-app.loader.js",
    dataUrl: "/unity/test-app.data",
    frameworkUrl: "/unity/test-app.framework.js",
    codeUrl: "/unity/test-app.wasm",
  });

  return (
    <div className="p-4">
      <h1 className="font-bold text-4xl mb-2 text-center">Simple Platformer</h1>
      <Unity
        unityProvider={unityProvider}
        style={{ width: 800, height: 600 }}
        className="mx-auto"
      />
      <div className="flex items-center justify-center w-full">
        <Link to="/games" className="mt-6 text-center mx-auto">
          Back To All Games
        </Link>
      </div>
    </div>
  );
}
