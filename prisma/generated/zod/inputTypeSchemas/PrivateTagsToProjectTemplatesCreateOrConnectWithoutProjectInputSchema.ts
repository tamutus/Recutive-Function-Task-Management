import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesWhereUniqueInputSchema } from './PrivateTagsToProjectTemplatesWhereUniqueInputSchema';
import { PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';

export const PrivateTagsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default PrivateTagsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema;
