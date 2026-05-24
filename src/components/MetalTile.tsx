import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { fetchMetalData } from '../api/MockApi';
import { MetalData } from '../types';

interface MetalTileProps {
  metalName: string;
}

export default function MetalTile({ metalName }: MetalTileProps) {
  const router = useRouter();

  const [data, setData] = useState<MetalData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchMetalData(metalName);
      setData(result);
    } catch (err: any) {
      setError(err.message || 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <View className="bg-[#111827] border border-white/5 rounded-3xl p-5 mb-4 min-h-[140px] justify-between">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-white text-xl font-bold tracking-tight">
              {metalName}
            </Text>
            <Text className="text-slate-500 text-xs mt-1">
              Fetching live market data
            </Text>
          </View>

          <View className="w-10 h-10 rounded-2xl bg-white/5 items-center justify-center">
            <ActivityIndicator size="small" color="#fff" />
          </View>
        </View>

        <View className="mt-6">
          <View className="h-3 w-28 rounded-full bg-white/5 mb-3" />
          <View className="h-2 w-20 rounded-full bg-white/5" />
        </View>
      </View>
    );
  }

  if (error || !data) {
    return (
      <View className="bg-[#1a1111] border border-red-500/20 rounded-3xl p-5 mb-4">
        <View className="flex-row justify-between items-start">
          <View>
            <Text className="text-red-100 text-xl font-bold">
              {metalName}
            </Text>

            <Text className="text-red-400 text-sm mt-1">
              Unable to fetch live data
            </Text>
          </View>

          <View className="bg-red-500/10 px-3 py-1 rounded-full">
            <Text className="text-red-300 text-xs font-semibold">
              OFFLINE
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={loadData}
          activeOpacity={0.8}
          className="mt-5 bg-red-500/10 border border-red-500/20 rounded-2xl py-3 items-center"
        >
          <Text className="text-red-200 font-semibold">
            Retry Connection
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        router.push({
          pathname: '/details',
          params: { ...data },
        })
      }
      className="bg-[#111827] border border-white/5 rounded-3xl p-5 mb-4 overflow-hidden"
    >
      {/* Top Row */}
      <View className="flex-row items-start justify-between">
        <View>
          <Text className="text-white text-2xl font-black tracking-tight">
            {data.name}
          </Text>

          <Text className="text-slate-500 text-sm mt-1">
            Spot Market • Live
          </Text>
        </View>

        <View className="bg-amber-400/10 border border-amber-300/10 px-3 py-1.5 rounded-full">
          <Text className="text-amber-300 text-xs font-bold tracking-wider">
            {data.karat}
          </Text>
        </View>
      </View>

      <View className="mt-8 flex-row items-end">
        <Text className="text-5xl font-black text-white tracking-tighter">
          ${data.currentPrice}
        </Text>

        <Text className="text-slate-500 text-sm mb-1 ml-2">
          USD / gram
        </Text>
      </View>

      <View className="mt-8 flex-row items-center justify-between">
        <View>
          <Text className="text-slate-600 text-[11px] uppercase tracking-[2px]">
            Updated
          </Text>

          <Text className="text-slate-300 text-sm font-medium mt-1">
            {data.timestamp}
          </Text>
        </View>

        <View className="bg-emerald-400/10 border border-emerald-300/10 px-3 py-2 rounded-2xl">
          <Text className="text-emerald-300 text-xs font-bold">
            MARKET OPEN
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}