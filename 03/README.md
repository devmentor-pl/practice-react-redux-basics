> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e06-react-redux-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#03` React i Redux: Podstawy

Tym razem do naszego Magazynu dodamy kolejny element. Będzie to`state`, który przechowuje informacje o aktualnej dacie, tj. `new Date()`. Jeśli wykonałeś prawidłowo poprzednie zadanie, to odkomentowanie komponentu `<Task03 />` w `./src/components/App.js` nie powinno wywołać żadnego błędu. 

Jeśli jeszcze tego nie zrobiłeś, to teraz będzie odpowiedni moment, aby utworzyć wartości początkowe dla naszego stanu (ang. state). Pamiętaj, że poprzednie zadanie również musi działać prawidłowo, więc wartości początkowe powinny wyglądać mniej więcej w taki sposób::
```
{
    message: 'Działa!',
    time: new Date(),
}
```

Należy też zdefiniować odpowiedni reduktor (ang. Reducer), który wykonuje zmiany w naszym Magazynie. Zwróć uwagę, że w pliku `./03/Task03.js` mamy zdefiniowany `onClick`, który uruchamia akcję `getCurrentTime`. Jej zadaniem jest aktualizacja właściwości `time` przechowującej aktualną datę, tj. `new Date()`. Musimy obsłużyć tę akcję.

Po każdym kliknięciu w przycisk `get current time` powinieneś zobaczyć informację o aktualnej godzinie.

Na koniec podłącz do Magazynu [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension) i przetestuj działanie swojego rozwiązania.

&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../02) | [*następne zadanie*](./../04) :arrow_right:
