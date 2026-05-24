import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

export default function DetailsScreen() {
  const params = useLocalSearchParams();

  const isPositive =
    parseFloat(params.currentPrice as string) >=
    parseFloat(params.previousClose as string);
  const metalName = Array.isArray(params.name) ? params.name[0] : params.name;
  return (
    <>
      <StatusBar barStyle="light-content" />

      <ScrollView
        className="flex-1 bg-[#020617]"
        contentContainerStyle={{
          padding: 18,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Stack.Screen
          options={{
            headerTitle: metalName ? `${metalName} Details` : 'Details',
            headerBackTitle: 'Back',
            headerShadowVisible: false,
          }}
        />

        <View className="bg-[#111827] border border-white/5 rounded-[32px] p-6 mt-14">
          <View className="flex-row items-start justify-between">
            <View>
              <Text className="text-slate-500 text-xs uppercase tracking-[2px]">
                Commodity
              </Text>

              <Text className="text-white text-4xl font-black mt-2 tracking-tight">
                {params.name}
              </Text>
            </View>

            <View className="bg-amber-400/10 border border-amber-300/10 px-4 py-2 rounded-full">
              <Text className="text-amber-300 text-xs font-bold tracking-widest">
                {params.karat}
              </Text>
            </View>
          </View>

          <View className="mt-10">
            <Text className="text-slate-500 text-sm">
              Current Market Price
            </Text>

            <View className="flex-row items-end mt-2">
              <Text className="text-white text-6xl font-black tracking-tighter">
                ${params.currentPrice}
              </Text>

              <Text className="text-slate-500 mb-2 ml-2 text-sm">
                USD/g
              </Text>
            </View>

            <View
              className={`self-start mt-5 px-4 py-2 rounded-2xl border ${isPositive
                  ? 'bg-emerald-400/10 border-emerald-300/10'
                  : 'bg-red-400/10 border-red-300/10'
                }`}
            >
              <Text
                className={`font-bold text-sm ${isPositive ? 'text-emerald-300' : 'text-red-300'
                  }`}
              >
                {isPositive ? '+ Market Uptrend' : '- Market Downtrend'}
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-6 bg-[#111827] border border-white/5 rounded-[32px] p-6">
          <Text className="text-white text-xl font-bold mb-6">
            Market Stats
          </Text>

          <View className="space-y-5">
            <View className="flex-row justify-between items-center py-4 border-b border-white/5">
              <Text className="text-slate-500 text-sm">
                Trading Date
              </Text>

              <Text className="text-white text-base font-semibold">
                {params.date}
              </Text>
            </View>

            <View className="flex-row justify-between items-center py-4 border-b border-white/5">
              <Text className="text-slate-500 text-sm">
                Last Updated
              </Text>

              <Text className="text-white text-base font-semibold">
                {params.timestamp}
              </Text>
            </View>

            <View className="flex-row justify-between items-center py-4 border-b border-white/5">
              <Text className="text-slate-500 text-sm">
                Previous Close
              </Text>

              <Text className="text-white text-base font-semibold">
                ${params.previousClose}
              </Text>
            </View>

            <View className="flex-row justify-between items-center py-4">
              <Text className="text-slate-500 text-sm">
                Opening Price
              </Text>

              <Text className="text-white text-base font-semibold">
                ${params.openPrice}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}