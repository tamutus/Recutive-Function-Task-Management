import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesWhereUniqueInputSchema } from './PrivateTagsToProjectTemplatesWhereUniqueInputSchema';
import { PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema';

export const PrivateTagsToProjectTemplatesCreateOrConnectWithoutPrivateTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesCreateOrConnectWithoutPrivateTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema) ]),
}).strict();

export default PrivateTagsToProjectTemplatesCreateOrConnectWithoutPrivateTagInputSchema;
