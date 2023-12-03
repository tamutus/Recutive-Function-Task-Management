import { t, publicProcedure } from "./helpers/createRouter";
import { PersonAggregateSchema } from "../schemas/aggregatePerson.schema";
import { PersonCreateManySchema } from "../schemas/createManyPerson.schema";
import { PersonCreateOneSchema } from "../schemas/createOnePerson.schema";
import { PersonDeleteManySchema } from "../schemas/deleteManyPerson.schema";
import { PersonDeleteOneSchema } from "../schemas/deleteOnePerson.schema";
import { PersonFindFirstSchema } from "../schemas/findFirstPerson.schema";
import { PersonFindManySchema } from "../schemas/findManyPerson.schema";
import { PersonFindUniqueSchema } from "../schemas/findUniquePerson.schema";
import { PersonGroupBySchema } from "../schemas/groupByPerson.schema";
import { PersonUpdateManySchema } from "../schemas/updateManyPerson.schema";
import { PersonUpdateOneSchema } from "../schemas/updateOnePerson.schema";
import { PersonUpsertSchema } from "../schemas/upsertOnePerson.schema";

export const peopleRouter = t.router({
  aggregatePerson: publicProcedure
    .input(PersonAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePerson = await ctx.prisma.person.aggregate(input);
      return aggregatePerson;
    }),
  createManyPerson: publicProcedure
    .input(PersonCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPerson = await ctx.prisma.person.createMany(input);
      return createManyPerson;
    }),
  createOnePerson: publicProcedure
    .input(PersonCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePerson = await ctx.prisma.person.create(input);
      return createOnePerson;
    }),
  deleteManyPerson: publicProcedure
    .input(PersonDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPerson = await ctx.prisma.person.deleteMany(input);
      return deleteManyPerson;
    }),
  deleteOnePerson: publicProcedure
    .input(PersonDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePerson = await ctx.prisma.person.delete(input);
      return deleteOnePerson;
    }),
  findFirstPerson: publicProcedure
    .input(PersonFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPerson = await ctx.prisma.person.findFirst(input);
      return findFirstPerson;
    }),
  findFirstPersonOrThrow: publicProcedure
    .input(PersonFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPersonOrThrow = await ctx.prisma.person.findFirstOrThrow(input);
      return findFirstPersonOrThrow;
    }),
  findManyPerson: publicProcedure
    .input(PersonFindManySchema).query(async ({ ctx, input }) => {
      const findManyPerson = await ctx.prisma.person.findMany(input);
      return findManyPerson;
    }),
  findUniquePerson: publicProcedure
    .input(PersonFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePerson = await ctx.prisma.person.findUnique(input);
      return findUniquePerson;
    }),
  findUniquePersonOrThrow: publicProcedure
    .input(PersonFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePersonOrThrow = await ctx.prisma.person.findUniqueOrThrow(input);
      return findUniquePersonOrThrow;
    }),
  groupByPerson: publicProcedure
    .input(PersonGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPerson = await ctx.prisma.person.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPerson;
    }),
  updateManyPerson: publicProcedure
    .input(PersonUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPerson = await ctx.prisma.person.updateMany(input);
      return updateManyPerson;
    }),
  updateOnePerson: publicProcedure
    .input(PersonUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePerson = await ctx.prisma.person.update(input);
      return updateOnePerson;
    }),
  upsertOnePerson: publicProcedure
    .input(PersonUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePerson = await ctx.prisma.person.upsert(input);
      return upsertOnePerson;
    }),

}) 
