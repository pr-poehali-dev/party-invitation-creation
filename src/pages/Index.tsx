
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, MapPin, Film, Pizza, Popcorn, Gift, Calendar, Ban, 
  ChevronLeft, ChevronRight, Check, Shirt, MessageCircle
} from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userName, setUserName] = useState("");
  const [userTelegram, setUserTelegram] = useState("");
  
  const galleryImages = [
    "https://cdn.poehali.dev/files/47275d8c-8b1a-4ec6-90a2-86616fb45839.png",
    "https://cdn.poehali.dev/files/67c98aa1-d7f9-4523-b5da-18d58cc879d2.png",
    "https://cdn.poehali.dev/files/ec7e1a2a-d4bd-4640-871d-b94edd9414f8.png"
  ];
  
  // Проверка, подтверждал ли пользователь участие раньше
  useEffect(() => {
    const savedSubmission = localStorage.getItem('birthdayRsvp');
    if (savedSubmission) {
      const { name, telegram } = JSON.parse(savedSubmission);
      setUserName(name);
      setUserTelegram(telegram);
      setFormSubmitted(true);
    }
  }, []);
  
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const telegram = formData.get('telegram') as string;
    
    // Сохраняем данные в localStorage
    localStorage.setItem('birthdayRsvp', JSON.stringify({ name, telegram }));
    
    // Отправляем форму через FormSubmit
    try {
      const response = await fetch('https://formsubmit.co/ajax/xEsseax@yandex.ru', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          telegram,
          _subject: 'Новое подтверждение на День Рождения',
          _captcha: 'false'
        })
      });
      
      if (response.ok) {
        setUserName(name);
        setUserTelegram(telegram);
        setFormSubmitted(true);
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      // Всё равно покажем сообщение об успехе, даже если API недоступен
      setUserName(name);
      setUserTelegram(telegram);
      setFormSubmitted(true);
    }
  };
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center py-10 px-4"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1610809027249-86c649feacd5?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="w-full max-w-4xl">
        {/* Заголовок и подзаголовок */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 text-blue-900 animate-fade-in">Happy fckng B-Day party</h1>
          <p className="text-2xl text-blue-600 mb-6">Будет весело, но это не точно</p>
          
          <Separator className="my-6">
            <div className="px-4">
              <span className="text-blue-500">✦</span>
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
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Clock className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1">Когда</h3>
                      <p className="text-gray-700">18 мая, воскресенье</p>
                      <p className="text-gray-700">с 18:20 до 22:00</p>
                    </div>
                  </div>

                  {/* Место */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-700" />
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
                        className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center mt-1"
                      >
                        Открыть на карте →
                      </a>
                      <p className="text-gray-600 text-sm mt-2 italic">Своей парковки у кинотеатра нет, но можно воспользоваться городскими.</p>
                    </div>
                  </div>

                  {/* Программа */}
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-blue-700" />
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
                            <Film className="h-4 w-4 mr-1 text-blue-700" />
                            <span>Просмотр фильма "Конклав"</span>
                          </div>
                          <div className="bg-gray-100 p-3 rounded-md mt-2 text-sm">
                            <div className="flex justify-between items-center mb-1">
                              <a 
                                href="https://wink.ru/movies/konklav-year-2024" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
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
                        <div className="text-gray-700">Обнимаемся, расходимся и следующим утром пытаемся выжить</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Дресс-код */}
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <Shirt className="h-5 w-5 mr-2 text-blue-700" />
                      Дресс-код
                    </h3>
                    <div className="ml-7">
                      <p className="text-gray-700">
                        Любой. Приходите в том, в чём вам будет комфортно.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Повседневный</span>
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Комфортный</span>
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">На ваш выбор</span>
                      </div>
                    </div>
                  </div>

                  {/* О подарках */}
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <Gift className="h-5 w-5 mr-2 text-blue-700" />
                      О подарках
                    </h3>
                    
                    <Tabs defaultValue="wishlist" className="ml-7">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="wishlist">Вишлист</TabsTrigger>
                        <TabsTrigger value="anti-wishlist">Антивишлист</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="wishlist" className="space-y-3 mt-3">
                        <p className="text-gray-700 mb-3">
                          Лучший подарок — рост hard и soft skills, здоровый сон, время из мешков под глазами, грамотный инвестиционный портфель и билеты в горы, поэтому поздравить можно вот сюда:
                        </p>
                        <a 
                          href="https://www.tinkoff.ru/rm/r_aXFahIcQRA.kXVDrhjCbq/AxM6832821" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mb-3 transition-colors"
                        >
                          Поздравить тут
                        </a>
                        <p className="text-gray-700 mt-3 mb-2">Ещё вишлист живёт вот здесь:</p>
                        <a 
                          href="https://followish.io/mywishlist/cvcvvjmgttfirm" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Посмотреть вишлист →
                        </a>
                      </TabsContent>
                      
                      <TabsContent value="anti-wishlist" className="mt-3">
                        <div className="flex items-start space-x-3">
                          <Ban className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                          <div className="space-y-2">
                            <p className="text-gray-700">Не рекомендуется дарить:</p>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                              <li>Декоративные предметы (модели, статуэтки, картины, текстиль)</li>
                              <li>Игрушки</li>
                              <li>Сладкое</li>
                              <li>Мебель</li>
                              <li>Любая кухонная утварь</li>
                              <li>Сертификаты на мастер-классы (кроме тех, что указаны в вишлисте — сейчас катастрофически не хватает времени)</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
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
                  <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <img 
                      src="https://cdn.poehali.dev/files/03c4a1e0-a935-46ef-8009-b82635031cfb.jpg"
                      alt="Постер фильма Конклав" 
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  
                  {formSubmitted ? (
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Check className="h-8 w-8" />
                      </div>
                      <p className="text-xl font-medium text-green-700 mb-2">Спасибо, участие подтверждено!</p>
                      <p className="text-gray-700">Увидимся на мероприятии, {userName}!</p>
                    </div>
                  ) : (
                    <>
                      <p className="text-center text-gray-700 mb-1">
                        Возможность посетить мероприятие открыта.
                      </p>
                      <p className="text-center text-gray-700">
                        Для подтверждения участия заполните форму.
                      </p>
                    </>
                  )}
                </div>

                {!formSubmitted && (
                  <form 
                    onSubmit={handleFormSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Имя
                      </label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="Иван Иванов" 
                        className="w-full"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telegram" className="block text-sm font-medium text-gray-700 mb-1">
                        Ник в Telegram
                      </label>
                      <Input 
                        id="telegram" 
                        name="telegram"
                        placeholder="@username" 
                        className="w-full"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Calendar className="mr-2 h-4 w-4" /> Подтвердить участие
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Card className="overflow-hidden shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-3">О зале "Сад"</h3>
                  <p className="text-gray-700 mb-4">
                    Зал оформлен в стиле сказочного сада. Живые растения, 
                    декоративное освещение и специальные проекции создают атмосферу леса.
                  </p>
                  
                  {/* Галерея перенесена в правую колонку */}
                  <div className="mb-4">
                    <div className="relative">
                      <div className="overflow-hidden rounded-lg aspect-video">
                        <img 
                          src={galleryImages[currentImage]} 
                          alt={`Фото зала ${currentImage + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                      </div>
                      
                      <button 
                        onClick={prevImage} 
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full"
                        aria-label="Предыдущее фото"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      
                      <button 
                        onClick={nextImage} 
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full"
                        aria-label="Следующее фото"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                      
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                        {galleryImages.map((_, index) => (
                          <button 
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`w-2 h-2 rounded-full ${currentImage === index ? 'bg-white' : 'bg-white/50'}`}
                            aria-label={`Перейти к фото ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src="https://cdn.poehali.dev/files/47275d8c-8b1a-4ec6-90a2-86616fb45839.png" 
                        alt="Декор зала Сад" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src="https://cdn.poehali.dev/files/67c98aa1-d7f9-4523-b5da-18d58cc879d2.png" 
                        alt="Интерьер зала Сад" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-12">
          <a 
            href="https://t.me/xEsseax" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors mb-4"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Связаться с организатором
          </a>
          <div className="text-gray-300 font-light mt-4">
            До встречи на мероприятии.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
