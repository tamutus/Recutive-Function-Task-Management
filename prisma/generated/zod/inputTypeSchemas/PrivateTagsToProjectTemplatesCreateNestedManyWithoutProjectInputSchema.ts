import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesCreateManyProjectInputEnvelopeSchema } from './PrivateTagsToProjectTemplatesCreateManyProjectInputEnvelopeSchema';
import { PrivateTagsToProjectTemplatesWhereUniqueInputSchema } from './PrivateTagsToProjectTemplatesWhereUniqueInputSchema';

export const PrivateTagsToProjectTemplatesCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema).array(),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToProjectTemplatesCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToProjectTemplatesCreateNestedManyWithoutProjectInputSchema;
