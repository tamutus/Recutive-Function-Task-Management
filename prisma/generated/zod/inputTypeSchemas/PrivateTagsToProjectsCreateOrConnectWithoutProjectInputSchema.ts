import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsWhereUniqueInputSchema } from './PrivateTagsToProjectsWhereUniqueInputSchema';
import { PrivateTagsToProjectsCreateWithoutProjectInputSchema } from './PrivateTagsToProjectsCreateWithoutProjectInputSchema';
import { PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema } from './PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema';

export const PrivateTagsToProjectsCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagsToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default PrivateTagsToProjectsCreateOrConnectWithoutProjectInputSchema;
