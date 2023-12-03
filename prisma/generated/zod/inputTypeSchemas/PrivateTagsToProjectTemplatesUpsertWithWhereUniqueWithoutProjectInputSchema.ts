import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesWhereUniqueInputSchema } from './PrivateTagsToProjectTemplatesWhereUniqueInputSchema';
import { PrivateTagsToProjectTemplatesUpdateWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesUpdateWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';

export const PrivateTagsToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesUpdateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default PrivateTagsToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema;
