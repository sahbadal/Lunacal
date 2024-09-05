import Tabs from './components/Tabs';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Left side empty */}
        <div className="hidden md:block md:w-1/2"></div>

        {/* Right side - Tabs and Gallery */}
        <div className="w-full md:w-1/2">
          <Tabs />
          <div className="mt-8">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
