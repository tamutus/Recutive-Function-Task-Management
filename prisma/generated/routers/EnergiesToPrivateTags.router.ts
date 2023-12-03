import { t, publicProcedure } from "./helpers/createRouter";
import { EnergiesToPrivateTagsAggregateSchema } from "../schemas/aggregateEnergiesToPrivateTags.schema";
import { EnergiesToPrivateTagsCreateManySchema } from "../schemas/createManyEnergiesToPrivateTags.schema";
import { EnergiesToPrivateTagsCreateOneSchema } from "../schemas/createOneEnergiesToPrivateTags.schema";
import { EnergiesToPrivateTagsDeleteManySchema } from "../schemas/deleteManyEnergiesToPrivateTags.schema";
import { EnergiesToPrivateTagsDeleteOneSchema } from "../schemas/deleteOneEnergiesToPrivateTags.schema";
import { EnergiesToPrivateTagsFindFirstSchema } from "../schemas/findFirstEnergiesToPrivateTags.schema";
import { EnergiesToPrivateTagsFindManySchema } from "../schemas/findManyEnergiesToPrivateTags.schema";
import { EnergiesToPrivateTagsFindUniqueSchema } from "../schemas/findUniqueEnergiesToPrivateTags.schema";
import { EnergiesToPrivateTagsGroupBySchema } from "../schemas/groupByEnergiesToPrivateTags.schema";
import { EnergiesToPrivateTagsUpdateManySchema } from "../schemas/updateManyEnergiesToPrivateTags.schema";
import { EnergiesToPrivateTagsUpdateOneSchema } from "../schemas/updateOneEnergiesToPrivateTags.schema";
import { EnergiesToPrivateTagsUpsertSchema } from "../schemas/upsertOneEnergiesToPrivateTags.schema";

export const energiestoprivatetagsRouter = t.router({
  aggregateEnergiesToPrivateTags: publicProcedure
    .input(EnergiesToPrivateTagsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateEnergiesToPrivateTags = await ctx.prisma.energiesToPrivateTags.aggregate(input);
      return aggregateEnergiesToPrivateTags;
    }),
  createManyEnergiesToPrivateTags: publicProcedure
    .input(EnergiesToPrivateTagsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyEnergiesToPrivateTags = await ctx.prisma.energiesToPrivateTags.createMany(input);
      return createManyEnergiesToPrivateTags;
    }),
  createOneEnergiesToPrivateTags: publicProcedure
    .input(EnergiesToPrivateTagsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneEnergiesToPrivateTags = await ctx.prisma.energiesToPrivateTags.create(input);
      return createOneEnergiesToPrivateTags;
    }),
  deleteManyEnergiesToPrivateTags: publicProcedure
    .input(EnergiesToPrivateTagsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyEnergiesToPrivateTags = await ctx.prisma.energiesToPrivateTags.deleteMany(input);
      return deleteManyEnergiesToPrivateTags;
    }),
  deleteOneEnergiesToPrivateTags: publicProcedure
    .input(EnergiesToPrivateTagsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneEnergiesToPrivateTags = await ctx.prisma.energiesToPrivateTags.delete(input);
      return deleteOneEnergiesToPrivateTags;
    }),
  findFirstEnergiesToPrivateTags: publicProcedure
    .input(EnergiesToPrivateTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToPrivateTags = await ctx.prisma.energiesToPrivateTags.findFirst(input);
      return findFirstEnergiesToPrivateTags;
    }),
  findFirstEnergiesToPrivateTagsOrThrow: publicProcedure
    .input(EnergiesToPrivateTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToPrivateTagsOrThrow = await ctx.prisma.energiesToPrivateTags.findFirstOrThrow(input);
      return findFirstEnergiesToPrivateTagsOrThrow;
    }),
  findManyEnergiesToPrivateTags: publicProcedure
    .input(EnergiesToPrivateTagsFindManySchema).query(async ({ ctx, input }) => {
      const findManyEnergiesToPrivateTags = await ctx.prisma.energiesToPrivateTags.findMany(input);
      return findManyEnergiesToPrivateTags;
    }),
  findUniqueEnergiesToPrivateTags: publicProcedure
    .input(EnergiesToPrivateTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToPrivateTags = await ctx.prisma.energiesToPrivateTags.findUnique(input);
      return findUniqueEnergiesToPrivateTags;
    }),
  findUniqueEnergiesToPrivateTagsOrThrow: publicProcedure
    .input(EnergiesToPrivateTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToPrivateTagsOrThrow = await ctx.prisma.energiesToPrivateTags.findUniqueOrThrow(input);
      return findUniqueEnergiesToPrivateTagsOrThrow;
    }),
  groupByEnergiesToPrivateTags: publicProcedure
    .input(EnergiesToPrivateTagsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByEnergiesToPrivateTags = await ctx.prisma.energiesToPrivateTags.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByEnergiesToPrivateTags;
    }),
  updateManyEnergiesToPrivateTags: publicProcedure
    .input(EnergiesToPrivateTagsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyEnergiesToPrivateTags = await ctx.prisma.energiesToPrivateTags.updateMany(input);
      return updateManyEnergiesToPrivateTags;
    }),
  updateOneEnergiesToPrivateTags: publicProcedure
    .input(EnergiesToPrivateTagsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneEnergiesToPrivateTags = await ctx.prisma.energiesToPrivateTags.update(input);
      return updateOneEnergiesToPrivateTags;
    }),
  upsertOneEnergiesToPrivateTags: publicProcedure
    .input(EnergiesToPrivateTagsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneEnergiesToPrivateTags = await ctx.prisma.energiesToPrivateTags.upsert(input);
      return upsertOneEnergiesToPrivateTags;
    }),

}) 
