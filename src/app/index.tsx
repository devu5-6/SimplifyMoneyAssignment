import React from 'react';
import { ScrollView, View, Text, StatusBar } from 'react-native';
import MetalTile from '../components/MetalTile';

const METALS = ['Gold', 'Silver', 'Platinum', 'Palladium'];

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <ScrollView
        className="flex-1 bg-[#020617]"
        contentContainerStyle={{
          paddingHorizontal: 18,
          paddingTop: 28,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-10">
          <View className="bg-white/5 self-start px-4 py-2 rounded-full border border-white/5">
            <Text className="text-slate-300 text-xs font-bold tracking-[2px] uppercase">
              Developer Dashboard
            </Text>
          </View>

          <Text className="text-white text-5xl font-black tracking-tighter mt-5 leading-[56px]">
            Precious Metals
          </Text>

          <Text className="text-slate-500 text-base mt-4 leading-6 max-w-[300px]">
            Real-time market overview with modern trading UI aesthetics.
          </Text>
        </View>

        <View>
          {METALS.map((metal) => (
            <MetalTile key={metal} metalName={metal} />
          ))}
        </View>
      </ScrollView>
    </>
  );
}