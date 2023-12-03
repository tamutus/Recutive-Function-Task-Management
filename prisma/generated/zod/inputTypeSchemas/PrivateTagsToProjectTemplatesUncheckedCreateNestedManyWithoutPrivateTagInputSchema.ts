import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectTemplatesCreateOrConnectWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesCreateOrConnectWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectTemplatesCreateManyPrivateTagInputEnvelopeSchema } from './PrivateTagsToProjectTemplatesCreateManyPrivateTagInputEnvelopeSchema';
import { PrivateTagsToProjectTemplatesWhereUniqueInputSchema } from './PrivateTagsToProjectTemplatesWhereUniqueInputSchema';

export const PrivateTagsToProjectTemplatesUncheckedCreateNestedManyWithoutPrivateTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUncheckedCreateNestedManyWithoutPrivateTagInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema).array(),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesCreateOrConnectWithoutPrivateTagInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesCreateOrConnectWithoutPrivateTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToProjectTemplatesCreateManyPrivateTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToProjectTemplatesUncheckedCreateNestedManyWithoutPrivateTagInputSchema;
