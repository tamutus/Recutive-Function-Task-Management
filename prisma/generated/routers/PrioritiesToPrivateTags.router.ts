import { t, publicProcedure } from "./helpers/createRouter";
import { PrioritiesToPrivateTagsAggregateSchema } from "../schemas/aggregatePrioritiesToPrivateTags.schema";
import { PrioritiesToPrivateTagsCreateManySchema } from "../schemas/createManyPrioritiesToPrivateTags.schema";
import { PrioritiesToPrivateTagsCreateOneSchema } from "../schemas/createOnePrioritiesToPrivateTags.schema";
import { PrioritiesToPrivateTagsDeleteManySchema } from "../schemas/deleteManyPrioritiesToPrivateTags.schema";
import { PrioritiesToPrivateTagsDeleteOneSchema } from "../schemas/deleteOnePrioritiesToPrivateTags.schema";
import { PrioritiesToPrivateTagsFindFirstSchema } from "../schemas/findFirstPrioritiesToPrivateTags.schema";
import { PrioritiesToPrivateTagsFindManySchema } from "../schemas/findManyPrioritiesToPrivateTags.schema";
import { PrioritiesToPrivateTagsFindUniqueSchema } from "../schemas/findUniquePrioritiesToPrivateTags.schema";
import { PrioritiesToPrivateTagsGroupBySchema } from "../schemas/groupByPrioritiesToPrivateTags.schema";
import { PrioritiesToPrivateTagsUpdateManySchema } from "../schemas/updateManyPrioritiesToPrivateTags.schema";
import { PrioritiesToPrivateTagsUpdateOneSchema } from "../schemas/updateOnePrioritiesToPrivateTags.schema";
import { PrioritiesToPrivateTagsUpsertSchema } from "../schemas/upsertOnePrioritiesToPrivateTags.schema";

export const prioritiestoprivatetagsRouter = t.router({
  aggregatePrioritiesToPrivateTags: publicProcedure
    .input(PrioritiesToPrivateTagsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrioritiesToPrivateTags = await ctx.prisma.prioritiesToPrivateTags.aggregate(input);
      return aggregatePrioritiesToPrivateTags;
    }),
  createManyPrioritiesToPrivateTags: publicProcedure
    .input(PrioritiesToPrivateTagsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrioritiesToPrivateTags = await ctx.prisma.prioritiesToPrivateTags.createMany(input);
      return createManyPrioritiesToPrivateTags;
    }),
  createOnePrioritiesToPrivateTags: publicProcedure
    .input(PrioritiesToPrivateTagsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrioritiesToPrivateTags = await ctx.prisma.prioritiesToPrivateTags.create(input);
      return createOnePrioritiesToPrivateTags;
    }),
  deleteManyPrioritiesToPrivateTags: publicProcedure
    .input(PrioritiesToPrivateTagsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrioritiesToPrivateTags = await ctx.prisma.prioritiesToPrivateTags.deleteMany(input);
      return deleteManyPrioritiesToPrivateTags;
    }),
  deleteOnePrioritiesToPrivateTags: publicProcedure
    .input(PrioritiesToPrivateTagsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrioritiesToPrivateTags = await ctx.prisma.prioritiesToPrivateTags.delete(input);
      return deleteOnePrioritiesToPrivateTags;
    }),
  findFirstPrioritiesToPrivateTags: publicProcedure
    .input(PrioritiesToPrivateTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrioritiesToPrivateTags = await ctx.prisma.prioritiesToPrivateTags.findFirst(input);
      return findFirstPrioritiesToPrivateTags;
    }),
  findFirstPrioritiesToPrivateTagsOrThrow: publicProcedure
    .input(PrioritiesToPrivateTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrioritiesToPrivateTagsOrThrow = await ctx.prisma.prioritiesToPrivateTags.findFirstOrThrow(input);
      return findFirstPrioritiesToPrivateTagsOrThrow;
    }),
  findManyPrioritiesToPrivateTags: publicProcedure
    .input(PrioritiesToPrivateTagsFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrioritiesToPrivateTags = await ctx.prisma.prioritiesToPrivateTags.findMany(input);
      return findManyPrioritiesToPrivateTags;
    }),
  findUniquePrioritiesToPrivateTags: publicProcedure
    .input(PrioritiesToPrivateTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrioritiesToPrivateTags = await ctx.prisma.prioritiesToPrivateTags.findUnique(input);
      return findUniquePrioritiesToPrivateTags;
    }),
  findUniquePrioritiesToPrivateTagsOrThrow: publicProcedure
    .input(PrioritiesToPrivateTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrioritiesToPrivateTagsOrThrow = await ctx.prisma.prioritiesToPrivateTags.findUniqueOrThrow(input);
      return findUniquePrioritiesToPrivateTagsOrThrow;
    }),
  groupByPrioritiesToPrivateTags: publicProcedure
    .input(PrioritiesToPrivateTagsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrioritiesToPrivateTags = await ctx.prisma.prioritiesToPrivateTags.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrioritiesToPrivateTags;
    }),
  updateManyPrioritiesToPrivateTags: publicProcedure
    .input(PrioritiesToPrivateTagsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrioritiesToPrivateTags = await ctx.prisma.prioritiesToPrivateTags.updateMany(input);
      return updateManyPrioritiesToPrivateTags;
    }),
  updateOnePrioritiesToPrivateTags: publicProcedure
    .input(PrioritiesToPrivateTagsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrioritiesToPrivateTags = await ctx.prisma.prioritiesToPrivateTags.update(input);
      return updateOnePrioritiesToPrivateTags;
    }),
  upsertOnePrioritiesToPrivateTags: publicProcedure
    .input(PrioritiesToPrivateTagsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrioritiesToPrivateTags = await ctx.prisma.prioritiesToPrivateTags.upsert(input);
      return upsertOnePrioritiesToPrivateTags;
    }),

}) 
