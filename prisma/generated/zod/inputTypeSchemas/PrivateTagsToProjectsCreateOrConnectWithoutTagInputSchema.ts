import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsWhereUniqueInputSchema } from './PrivateTagsToProjectsWhereUniqueInputSchema';
import { PrivateTagsToProjectsCreateWithoutTagInputSchema } from './PrivateTagsToProjectsCreateWithoutTagInputSchema';
import { PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema } from './PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema';

export const PrivateTagsToProjectsCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagsToProjectsCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PrivateTagsToProjectsCreateOrConnectWithoutTagInputSchema;
