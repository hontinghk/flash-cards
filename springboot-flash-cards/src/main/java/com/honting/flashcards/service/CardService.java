package com.honting.flashcards.service;

import com.honting.flashcards.entity.Card;
import org.springframework.http.HttpStatus;

import java.util.List;

public interface CardService {

    List<Card> getAllCards();

    Card addCard(Card card);

    Card updateCard(Card card);

    HttpStatus deleteCard(Long id);

}
