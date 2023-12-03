import { t, publicProcedure } from "./helpers/createRouter";
import { PrivateEnergiesToPrivateTagsAggregateSchema } from "../schemas/aggregatePrivateEnergiesToPrivateTags.schema";
import { PrivateEnergiesToPrivateTagsCreateManySchema } from "../schemas/createManyPrivateEnergiesToPrivateTags.schema";
import { PrivateEnergiesToPrivateTagsCreateOneSchema } from "../schemas/createOnePrivateEnergiesToPrivateTags.schema";
import { PrivateEnergiesToPrivateTagsDeleteManySchema } from "../schemas/deleteManyPrivateEnergiesToPrivateTags.schema";
import { PrivateEnergiesToPrivateTagsDeleteOneSchema } from "../schemas/deleteOnePrivateEnergiesToPrivateTags.schema";
import { PrivateEnergiesToPrivateTagsFindFirstSchema } from "../schemas/findFirstPrivateEnergiesToPrivateTags.schema";
import { PrivateEnergiesToPrivateTagsFindManySchema } from "../schemas/findManyPrivateEnergiesToPrivateTags.schema";
import { PrivateEnergiesToPrivateTagsFindUniqueSchema } from "../schemas/findUniquePrivateEnergiesToPrivateTags.schema";
import { PrivateEnergiesToPrivateTagsGroupBySchema } from "../schemas/groupByPrivateEnergiesToPrivateTags.schema";
import { PrivateEnergiesToPrivateTagsUpdateManySchema } from "../schemas/updateManyPrivateEnergiesToPrivateTags.schema";
import { PrivateEnergiesToPrivateTagsUpdateOneSchema } from "../schemas/updateOnePrivateEnergiesToPrivateTags.schema";
import { PrivateEnergiesToPrivateTagsUpsertSchema } from "../schemas/upsertOnePrivateEnergiesToPrivateTags.schema";

export const privateenergiestoprivatetagsRouter = t.router({
  aggregatePrivateEnergiesToPrivateTags: publicProcedure
    .input(PrivateEnergiesToPrivateTagsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrivateEnergiesToPrivateTags = await ctx.prisma.privateEnergiesToPrivateTags.aggregate(input);
      return aggregatePrivateEnergiesToPrivateTags;
    }),
  createManyPrivateEnergiesToPrivateTags: publicProcedure
    .input(PrivateEnergiesToPrivateTagsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrivateEnergiesToPrivateTags = await ctx.prisma.privateEnergiesToPrivateTags.createMany(input);
      return createManyPrivateEnergiesToPrivateTags;
    }),
  createOnePrivateEnergiesToPrivateTags: publicProcedure
    .input(PrivateEnergiesToPrivateTagsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrivateEnergiesToPrivateTags = await ctx.prisma.privateEnergiesToPrivateTags.create(input);
      return createOnePrivateEnergiesToPrivateTags;
    }),
  deleteManyPrivateEnergiesToPrivateTags: publicProcedure
    .input(PrivateEnergiesToPrivateTagsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrivateEnergiesToPrivateTags = await ctx.prisma.privateEnergiesToPrivateTags.deleteMany(input);
      return deleteManyPrivateEnergiesToPrivateTags;
    }),
  deleteOnePrivateEnergiesToPrivateTags: publicProcedure
    .input(PrivateEnergiesToPrivateTagsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrivateEnergiesToPrivateTags = await ctx.prisma.privateEnergiesToPrivateTags.delete(input);
      return deleteOnePrivateEnergiesToPrivateTags;
    }),
  findFirstPrivateEnergiesToPrivateTags: publicProcedure
    .input(PrivateEnergiesToPrivateTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToPrivateTags = await ctx.prisma.privateEnergiesToPrivateTags.findFirst(input);
      return findFirstPrivateEnergiesToPrivateTags;
    }),
  findFirstPrivateEnergiesToPrivateTagsOrThrow: publicProcedure
    .input(PrivateEnergiesToPrivateTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToPrivateTagsOrThrow = await ctx.prisma.privateEnergiesToPrivateTags.findFirstOrThrow(input);
      return findFirstPrivateEnergiesToPrivateTagsOrThrow;
    }),
  findManyPrivateEnergiesToPrivateTags: publicProcedure
    .input(PrivateEnergiesToPrivateTagsFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrivateEnergiesToPrivateTags = await ctx.prisma.privateEnergiesToPrivateTags.findMany(input);
      return findManyPrivateEnergiesToPrivateTags;
    }),
  findUniquePrivateEnergiesToPrivateTags: publicProcedure
    .input(PrivateEnergiesToPrivateTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToPrivateTags = await ctx.prisma.privateEnergiesToPrivateTags.findUnique(input);
      return findUniquePrivateEnergiesToPrivateTags;
    }),
  findUniquePrivateEnergiesToPrivateTagsOrThrow: publicProcedure
    .input(PrivateEnergiesToPrivateTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToPrivateTagsOrThrow = await ctx.prisma.privateEnergiesToPrivateTags.findUniqueOrThrow(input);
      return findUniquePrivateEnergiesToPrivateTagsOrThrow;
    }),
  groupByPrivateEnergiesToPrivateTags: publicProcedure
    .input(PrivateEnergiesToPrivateTagsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrivateEnergiesToPrivateTags = await ctx.prisma.privateEnergiesToPrivateTags.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrivateEnergiesToPrivateTags;
    }),
  updateManyPrivateEnergiesToPrivateTags: publicProcedure
    .input(PrivateEnergiesToPrivateTagsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrivateEnergiesToPrivateTags = await ctx.prisma.privateEnergiesToPrivateTags.updateMany(input);
      return updateManyPrivateEnergiesToPrivateTags;
    }),
  updateOnePrivateEnergiesToPrivateTags: publicProcedure
    .input(PrivateEnergiesToPrivateTagsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrivateEnergiesToPrivateTags = await ctx.prisma.privateEnergiesToPrivateTags.update(input);
      return updateOnePrivateEnergiesToPrivateTags;
    }),
  upsertOnePrivateEnergiesToPrivateTags: publicProcedure
    .input(PrivateEnergiesToPrivateTagsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrivateEnergiesToPrivateTags = await ctx.prisma.privateEnergiesToPrivateTags.upsert(input);
      return upsertOnePrivateEnergiesToPrivateTags;
    }),

}) 
