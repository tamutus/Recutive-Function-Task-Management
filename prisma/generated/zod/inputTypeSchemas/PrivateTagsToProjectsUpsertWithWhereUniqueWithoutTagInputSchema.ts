import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsWhereUniqueInputSchema } from './PrivateTagsToProjectsWhereUniqueInputSchema';
import { PrivateTagsToProjectsUpdateWithoutTagInputSchema } from './PrivateTagsToProjectsUpdateWithoutTagInputSchema';
import { PrivateTagsToProjectsUncheckedUpdateWithoutTagInputSchema } from './PrivateTagsToProjectsUncheckedUpdateWithoutTagInputSchema';
import { PrivateTagsToProjectsCreateWithoutTagInputSchema } from './PrivateTagsToProjectsCreateWithoutTagInputSchema';
import { PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema } from './PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema';

export const PrivateTagsToProjectsUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateTagsToProjectsUpdateWithoutTagInputSchema),z.lazy(() => PrivateTagsToProjectsUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagsToProjectsCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PrivateTagsToProjectsUpsertWithWhereUniqueWithoutTagInputSchema;
