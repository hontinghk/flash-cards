package com.honting.flashcards.service.impl;

import com.honting.flashcards.entity.Card;
import com.honting.flashcards.repository.CardRepository;
import com.honting.flashcards.service.CardService;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardServiceImpl implements CardService {

    private CardRepository cardRepository;

    public CardServiceImpl(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    @Override
    public List<Card> getAllCards() {
        return cardRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @Override
    public Card addCard(Card card) {
        Card newCard = cardRepository.save(card);
        return newCard;
    }

    @Override
    public Card updateCard(Card card) {
        Card updatedCard = cardRepository.save(card);
        return updatedCard;
    }

    @Override
    public HttpStatus deleteCard(int id) {
        try {
            cardRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            return HttpStatus.BAD_REQUEST;
        }

        return HttpStatus.OK;
    }

}
