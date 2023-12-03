import { t, publicProcedure } from "./helpers/createRouter";
import { EnergiesToProjectsAggregateSchema } from "../schemas/aggregateEnergiesToProjects.schema";
import { EnergiesToProjectsCreateManySchema } from "../schemas/createManyEnergiesToProjects.schema";
import { EnergiesToProjectsCreateOneSchema } from "../schemas/createOneEnergiesToProjects.schema";
import { EnergiesToProjectsDeleteManySchema } from "../schemas/deleteManyEnergiesToProjects.schema";
import { EnergiesToProjectsDeleteOneSchema } from "../schemas/deleteOneEnergiesToProjects.schema";
import { EnergiesToProjectsFindFirstSchema } from "../schemas/findFirstEnergiesToProjects.schema";
import { EnergiesToProjectsFindManySchema } from "../schemas/findManyEnergiesToProjects.schema";
import { EnergiesToProjectsFindUniqueSchema } from "../schemas/findUniqueEnergiesToProjects.schema";
import { EnergiesToProjectsGroupBySchema } from "../schemas/groupByEnergiesToProjects.schema";
import { EnergiesToProjectsUpdateManySchema } from "../schemas/updateManyEnergiesToProjects.schema";
import { EnergiesToProjectsUpdateOneSchema } from "../schemas/updateOneEnergiesToProjects.schema";
import { EnergiesToProjectsUpsertSchema } from "../schemas/upsertOneEnergiesToProjects.schema";

export const energiestoprojectsRouter = t.router({
  aggregateEnergiesToProjects: publicProcedure
    .input(EnergiesToProjectsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateEnergiesToProjects = await ctx.prisma.energiesToProjects.aggregate(input);
      return aggregateEnergiesToProjects;
    }),
  createManyEnergiesToProjects: publicProcedure
    .input(EnergiesToProjectsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyEnergiesToProjects = await ctx.prisma.energiesToProjects.createMany(input);
      return createManyEnergiesToProjects;
    }),
  createOneEnergiesToProjects: publicProcedure
    .input(EnergiesToProjectsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneEnergiesToProjects = await ctx.prisma.energiesToProjects.create(input);
      return createOneEnergiesToProjects;
    }),
  deleteManyEnergiesToProjects: publicProcedure
    .input(EnergiesToProjectsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyEnergiesToProjects = await ctx.prisma.energiesToProjects.deleteMany(input);
      return deleteManyEnergiesToProjects;
    }),
  deleteOneEnergiesToProjects: publicProcedure
    .input(EnergiesToProjectsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneEnergiesToProjects = await ctx.prisma.energiesToProjects.delete(input);
      return deleteOneEnergiesToProjects;
    }),
  findFirstEnergiesToProjects: publicProcedure
    .input(EnergiesToProjectsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToProjects = await ctx.prisma.energiesToProjects.findFirst(input);
      return findFirstEnergiesToProjects;
    }),
  findFirstEnergiesToProjectsOrThrow: publicProcedure
    .input(EnergiesToProjectsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToProjectsOrThrow = await ctx.prisma.energiesToProjects.findFirstOrThrow(input);
      return findFirstEnergiesToProjectsOrThrow;
    }),
  findManyEnergiesToProjects: publicProcedure
    .input(EnergiesToProjectsFindManySchema).query(async ({ ctx, input }) => {
      const findManyEnergiesToProjects = await ctx.prisma.energiesToProjects.findMany(input);
      return findManyEnergiesToProjects;
    }),
  findUniqueEnergiesToProjects: publicProcedure
    .input(EnergiesToProjectsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToProjects = await ctx.prisma.energiesToProjects.findUnique(input);
      return findUniqueEnergiesToProjects;
    }),
  findUniqueEnergiesToProjectsOrThrow: publicProcedure
    .input(EnergiesToProjectsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToProjectsOrThrow = await ctx.prisma.energiesToProjects.findUniqueOrThrow(input);
      return findUniqueEnergiesToProjectsOrThrow;
    }),
  groupByEnergiesToProjects: publicProcedure
    .input(EnergiesToProjectsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByEnergiesToProjects = await ctx.prisma.energiesToProjects.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByEnergiesToProjects;
    }),
  updateManyEnergiesToProjects: publicProcedure
    .input(EnergiesToProjectsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyEnergiesToProjects = await ctx.prisma.energiesToProjects.updateMany(input);
      return updateManyEnergiesToProjects;
    }),
  updateOneEnergiesToProjects: publicProcedure
    .input(EnergiesToProjectsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneEnergiesToProjects = await ctx.prisma.energiesToProjects.update(input);
      return updateOneEnergiesToProjects;
    }),
  upsertOneEnergiesToProjects: publicProcedure
    .input(EnergiesToProjectsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneEnergiesToProjects = await ctx.prisma.energiesToProjects.upsert(input);
      return upsertOneEnergiesToProjects;
    }),

}) 
