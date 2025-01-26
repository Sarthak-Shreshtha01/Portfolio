// https://leetcode-stats-api.herokuapp.com/sarthakshreshtha345

import React from 'react';
import { motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const StatsCard = ({ title, value, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-xl transition-shadow duration-300'
  >
    <div
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[140px] flex justify-evenly items-center flex-col hover:bg-black/80 transition-colors duration-300'
    >
      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
      <p className='text-white text-[36px] font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>
        {value}
      </p>
    </div>
  </motion.div>
);

const DsaDashboard = () => {
  // You can fetch these stats from LeetCode API or hardcode them
  const stats = [
    {
      title: "Total Problems Solved",
      value: "200+"
    },
    {
      title: "Easy Problems",
      value: "85"
    },
    {
      title: "Medium Problems",
      value: "95"
    },
    {
      title: "Hard Problems",
      value: "20"
    },
  ];

  const chartData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        data: [85, 95, 20],
        backgroundColor: [
          'rgba(0, 255, 170, 0.7)',  // Vibrant cyan for Easy
          'rgba(255, 140, 0, 0.7)',  // Bright orange for Medium
          'rgba(255, 0, 90, 0.7)',   // Hot pink for Hard
        ],
        borderColor: [
          'rgba(0, 255, 170, 0.9)',
          'rgba(255, 140, 0, 0.9)',
          'rgba(255, 0, 90, 0.9)',
        ],
        borderWidth: 2,
        cutout: '70%',
        hoverOffset: 4,
        hoverBorderWidth: 3,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#fff',
          font: {
            size: 14,
            weight: 'bold'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 16,
          weight: 'bold'
        },
        bodyFont: {
          size: 14
        },
        padding: 12,
        callbacks: {
          label: function(context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((context.raw / total) * 100);
            return `${context.label}: ${context.raw} (${percentage}%)`;
          }
        }
      }
    },
    maintainAspectRatio: false,
    layout: {
      padding: 20
    },
    elements: {
      arc: {
        borderWidth: 2,
        borderRadius: 6,
      }
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Problem Solving Journey</p>
        <h2 className={styles.sectionHeadText}>DSA Progress.</h2>
      </motion.div>

      <div className='flex flex-col lg:flex-row items-center justify-between gap-10 mt-20'>
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className='w-full lg:w-1/2 h-[400px] relative'
        >
          <div className='absolute inset-0 bg-tertiary rounded-2xl p-8 backdrop-blur-sm bg-opacity-20'>
            <div className='relative h-full'>
              <Pie data={chartData} options={chartOptions} />
              <div className='absolute inset-0 flex items-center justify-center flex-col'>
                <div className='mb-7 opacity-0 hover:opacity-100 transition-opacity duration-300 text-center'>
                  <span className='text-white text-2xl font-bold block'>Acceptance <br /> Rate</span>
                  <span className='text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>
                    65.2%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className='w-full lg:w-1/2 space-y-4'
        >
          <p className='text-white text-[24px] font-semibold mb-8 text-center lg:text-left'>
            Problem Distribution
          </p>
          <div className='flex flex-wrap gap-4'>
            {stats.map((stat, index) => (
              <div className='w-full sm:w-[calc(50%-16px)]' key={`stat-${index}`}>
                <StatsCard {...stat} index={index} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-10 text-secondary text-[17px] max-w-3xl leading-[30px] text-center lg:text-left'
      >
        I regularly practice Data Structures and Algorithms on platforms like LeetCode
        to enhance my problem-solving skills. My focus is on solving diverse problems
        across different difficulty levels to build a strong foundation in algorithmic thinking.
      </motion.p>
    </>
  );
};

export default SectionWrapper(DsaDashboard, "dsa");