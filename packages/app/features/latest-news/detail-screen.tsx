import { getNews } from 'app/api/news'
import { News } from 'app/types/news'
import { View, Text, Image, H1, P, Pressable } from 'dripsy'
import { useEffect, useState } from 'react'
import { createParam } from 'solito'
import { Link, TextLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function NewsDetailScreen() {
  const [id] = useParam('id')

  const [data, setData] = useState<News>()

  useEffect(() => {
    if (id) getNews(Number(id)).then((news) => setData(news))
  }, [id])

  if (!data) return <></>

  return (
    <View sx={{ flex: 1, padding: 16 }}>
      <View
        sx={{
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 8,
          padding: 16,
        }}
      >
        {data.imageUrl && (
          <View sx={{ minHeight: 300, marginBottom: 10 }}>
            <Image
              source={{ uri: data.imageUrl }}
              height={400}
              width={800}
              resizeMode={'cover'}
              alt={data.title}
              sx={{ flex: 1, borderRadius: 8 }}
            />
          </View>
        )}

        <H1 sx={{ color: '#444', fontSize: 22, marginBottom: 10 }}>
          {data.title}
        </H1>
        <P>{data.summary}</P>
        <P> - by {data.newsSite}</P>
      </View>
      <View sx={{ marginTop: 10 }}>
        <Link href="/">
          <Pressable
            sx={{
              backgroundColor: '#000',
              padding: 10,
              width: 100,
              borderRadius: '8px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text sx={{ color: '#fff' }}>Go Home</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}
