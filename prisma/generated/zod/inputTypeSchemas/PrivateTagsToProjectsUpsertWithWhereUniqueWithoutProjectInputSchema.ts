import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsWhereUniqueInputSchema } from './PrivateTagsToProjectsWhereUniqueInputSchema';
import { PrivateTagsToProjectsUpdateWithoutProjectInputSchema } from './PrivateTagsToProjectsUpdateWithoutProjectInputSchema';
import { PrivateTagsToProjectsUncheckedUpdateWithoutProjectInputSchema } from './PrivateTagsToProjectsUncheckedUpdateWithoutProjectInputSchema';
import { PrivateTagsToProjectsCreateWithoutProjectInputSchema } from './PrivateTagsToProjectsCreateWithoutProjectInputSchema';
import { PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema } from './PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema';

export const PrivateTagsToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateTagsToProjectsUpdateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectsUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagsToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default PrivateTagsToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema;
