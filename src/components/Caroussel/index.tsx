import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import CarouselItem from '../CarrousselItem'

const { width, height } = Dimensions.get('window')

const Caroussel: React.FC<any> = ({ data }: any) => {
  let flatListRef = useRef(null)
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] =useState(data)

  useEffect(() => {
    function infiniteScroll() {
      let scrollValue = 0, scrolled = 0
      const numberOfData = dataList.length;

      setInterval(function() {
        scrolled++;
        if (scrolled < numberOfData) {
          scrollValue = scrollValue + width;
        } else {
          scrollValue = 0;
          scrolled = 0;
        }

        if(flatListRef !== null && flatListRef.current != null)
          flatListRef.current.scrollToOffset({ animated: true, offset: scrollValue });
      }, 1000 * 15);
    }
    setDataList(data)
    infiniteScroll();
  }, []);

  if (data && data.length) {
    return (
      <View>
        <FlatList
          style={{backgroundColor: '#ff9000'}}
          ref={flatListRef}
          data={dataList}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment='center'
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }: any) => {
            return <CarouselItem item={item} />
          }}
          onScroll={Animated.event(
            [{ nativeEvent: {contentOffset: { x: scrollX }}}],
            {useNativeDriver: false}
          )}
        />

        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
              useNativeDriver: false,
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: '#fff',
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default Caroussel