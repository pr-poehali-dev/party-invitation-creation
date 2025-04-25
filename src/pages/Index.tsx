
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Clock, MapPin, Film, Pizza, Popcorn, Gift, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center py-10 px-4 bg-gradient-to-b from-purple-50 to-purple-100"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://cdn.poehali.dev/files/03c4a1e0-a935-46ef-8009-b82635031cfb.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="w-full max-w-4xl">
        {/* Заголовок и подзаголовок */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 text-purple-900 animate-fade-in">Happy fckng B-Day party</h1>
          <p className="text-2xl text-purple-600 mb-6">Будет весело, но это не точно</p>
          
          <Separator className="my-6">
            <div className="px-4">
              <span className="text-purple-500">✦</span>
            </div>
          </Separator>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Левая колонка: Информация о мероприятии */}
          <div className="space-y-8">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Дата и время */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Clock className="h-6 w-6 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1">Когда</h3>
                      <p className="text-gray-700">19 мая, воскресенье</p>
                      <p className="text-gray-700">с 18:20 до 22:00</p>
                    </div>
                  </div>

                  {/* Место */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <MapPin className="h-6 w-6 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1">Где</h3>
                      <p className="text-gray-700">Кинотеатр "Секрет", зал "Сад"</p>
                      <p className="text-gray-700">Сельскохозяйственная 15с3</p>
                      <p className="text-gray-700 text-sm">(м. Ботанический сад, 6-10 мин. пешком)</p>
                      <a 
                        href="https://yandex.ru/maps/-/CHfFr0zq" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 text-sm inline-flex items-center mt-1"
                      >
                        Открыть на карте →
                      </a>
                      <p className="text-gray-600 text-sm mt-2 italic">Своей парковки у кинотеатра нет, но можно воспользоваться городскими.</p>
                    </div>
                  </div>

                  {/* Программа */}
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-purple-700" />
                      Программа
                    </h3>
                    <div className="ml-7 space-y-4">
                      <div className="flex items-start">
                        <div className="min-w-[100px] text-sm text-gray-600">18:20 - 18:40</div>
                        <div className="text-gray-700">Сбор гостей, welcome drink</div>
                      </div>
                      <div className="flex items-start">
                        <div className="min-w-[100px] text-sm text-gray-600">18:40 →</div>
                        <div className="text-gray-700">Пицца, попкорн и дружеское общение</div>
                      </div>
                      <div className="flex items-start">
                        <div className="min-w-[100px] text-sm text-gray-600">19:00 - 21:00</div>
                        <div className="text-gray-700">
                          <div className="flex items-center mb-1">
                            <Film className="h-4 w-4 mr-1 text-purple-700" />
                            <span>Просмотр фильма "Конклав"</span>
                          </div>
                          <div className="bg-gray-100 p-3 rounded-md mt-2 text-sm">
                            <div className="flex justify-between items-center mb-1">
                              <a 
                                href="https://wink.ru/movies/konklav-year-2024" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800"
                              >
                                "Конклав" (2024)
                              </a>
                              <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">IMDb: 7.2</div>
                            </div>
                            <p className="text-gray-600">
                              Драматический триллер о выборе нового Папы Римского после неожиданной смерти предыдущего понтифика. Закулисная борьба кардиналов за власть раскрывает тайны и интриги Ватикана.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="min-w-[100px] text-sm text-gray-600">21:40 - 22:00</div>
                        <div className="text-gray-700">Обнимаемся, расходимся и пытаемся выжить следующим утром</div>
                      </div>
                    </div>
                  </div>

                  {/* О подарках */}
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <Gift className="h-5 w-5 mr-2 text-purple-700" />
                      О подарках
                    </h3>
                    <div className="ml-7">
                      <p className="text-gray-700 mb-3">
                        Лучший подарок — грамотный инвестиционный портфель и билеты в горы, поэтому поздравить можно вот сюда:
                      </p>
                      <a 
                        href="https://www.tinkoff.ru/rm/r_aXFahIcQRA.kXVDrhjCbq/AxM6832821" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md mb-3 transition-colors"
                      >
                        Поздравить тут
                      </a>
                      <p className="text-gray-700 mt-3 mb-2">Ещё вишлист живёт вот здесь:</p>
                      <a 
                        href="https://followish.io/mywishlist/cvcvvjmgttfirm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800"
                      >
                        Посмотреть вишлист →
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Правая колонка: Форма подтверждения */}
          <div>
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <img 
                      src="https://cdn.poehali.dev/files/03c4a1e0-a935-46ef-8009-b82635031cfb.jpg"
                      alt="Постер фильма Конклав" 
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <p className="text-center text-gray-700 mb-1">
                    Будем рады видеть вас на нашем празднике!
                  </p>
                  <p className="text-center text-gray-700">
                    Пожалуйста, подтвердите своё присутствие.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Ваше имя
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов" 
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email для связи
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="w-full"
                    />
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Calendar className="mr-2 h-4 w-4" /> Подтвердить присутствие
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-600">
          С нетерпением ждём встречи с вами!
        </div>
      </div>
    </div>
  );
};

export default Index;
