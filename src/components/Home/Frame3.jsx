import { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import exporting from 'highcharts/modules/exporting';
import hollowcandlestick from 'highcharts/modules/hollowcandlestick';
import accessibility from 'highcharts/modules/accessibility';
import { useInView } from 'react-intersection-observer';
import BG from "../../assets/BG.png";

exporting(Highcharts);
hollowcandlestick(Highcharts);
accessibility(Highcharts);

const Frame3 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const chartComponentRef = useRef(null);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 400,
      minWidth: 310,
    },
    rangeSelector: {
      selected: 1,
    },
    navigator: {
      series: {
        color: Highcharts.getOptions().colors[0],
      },
    },
    series: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://demo-live-data.highcharts.com/aapl-ohlcv.json');
        const data = response.data;

        setChartOptions((prevOptions) => ({
          ...prevOptions,
          series: [
            {
              type: 'hollowcandlestick',
              name: 'Hollow Candlestick',
              data: data,
            },
          ],
        }));
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`min-h-screen text-center px-6 md:px-12 lg:px-24 ${inView ? 'animate-slideInFromLeft' : ''}`} ref={ref}
    style={{backgroundImage: `url(${BG})`,}}>
      <p className="text-4xl md:text-8xl lg:text-8xl md:h-28 lg:h-28 font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text">
        POX Market Performance
      </p>
      <p className="text-white text-justify py-12 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eum
        excepturi magnam officia aut obcaecati dolore maxime temporibus
        voluptatum harum culpa praesentium placeat optio fuga adipisci vitae
        unde sunt, nobis consequuntur. Aliquid voluptatum laboriosam explicabo
        praesentium magnam beatae mollitia voluptas?
      </p>
      <div className='w-full flex flex-col md:flex-row lg:flex-row md:space-x-6 lg:space-x-6'>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={chartOptions}
          ref={chartComponentRef}
        />
        <div className='flex flex-col space-y-6 md:space-y-0 lg:space-y-0 justify-between text-white'>
          <div className='mt-6 md:mt-0 lg:mt-0 flex flex-col border-[1px] border-gray-700 rounded-3xl px-16 py-5 bg-[#271B3F]'>
            <p className='font-bold text-3xl'>$673653648</p>
            <p className='font-semibold text-xl'>Total Market Cap</p>
          </div>
          <div className='flex flex-col border-[1px] border-gray-700 rounded-3xl px-16 py-5 bg-[#271B3F]'>
            <p className='font-bold text-3xl'>6736</p>
            <p className='font-semibold text-xl'>Global Rank</p>
          </div>
          <div className='flex flex-col border-[1px] border-gray-700 rounded-3xl px-16 py-5 bg-[#271B3F]'>
            <p className='font-bold text-3xl'>67365</p>
            <p className='font-semibold text-xl'>Accounts holding POX</p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row lg:flex-row justify-between text-white py-12 space-y-4 md:space-y-0 md:space-x-4'>
  <div className='flex-1 flex flex-col border-y-[1px] border-gray-700 border-l-[1px] rounded-3xl md:rounded-r-none lg:rounded-r-none px-4 py-5 md:px-16 bg-[#271B3F]'>
    <p className='font-bold text-3xl'>6736</p>
    <p className='font-semibold text-xl'>Current Price</p>
  </div>
  <div className='flex-1 flex flex-col border-y-[1px] border-gray-700 px-4 py-5 rounded-3xl md:rounded-none lg:rounded-none md:px-16 bg-[#271B3F]'>
    <p className='font-bold text-3xl'>6736</p>
    <p className='font-semibold text-xl'>Transaction Volume (24hr)</p>
  </div>
  <div className='flex-1 flex flex-col border-y-[1px] border-gray-700 border-r-[1px] rounded-3xl md:rounded-l-none lg:rounded-l-none px-4 py-5 md:px-16 bg-[#271B3F]'>
    <p className='font-bold text-3xl'>67365</p>
    <p className='font-semibold text-xl'>Transaction Count (24hr)</p>
  </div>
</div>

    </div>
  );
};

export default Frame3;
