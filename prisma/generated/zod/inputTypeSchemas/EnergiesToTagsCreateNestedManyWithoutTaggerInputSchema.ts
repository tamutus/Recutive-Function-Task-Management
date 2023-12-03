import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsCreateWithoutTaggerInputSchema } from './EnergiesToTagsCreateWithoutTaggerInputSchema';
import { EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema } from './EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema';
import { EnergiesToTagsCreateOrConnectWithoutTaggerInputSchema } from './EnergiesToTagsCreateOrConnectWithoutTaggerInputSchema';
import { EnergiesToTagsCreateManyTaggerInputEnvelopeSchema } from './EnergiesToTagsCreateManyTaggerInputEnvelopeSchema';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';

export const EnergiesToTagsCreateNestedManyWithoutTaggerInputSchema: z.ZodType<Prisma.EnergiesToTagsCreateNestedManyWithoutTaggerInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTagsCreateWithoutTaggerInputSchema),z.lazy(() => EnergiesToTagsCreateWithoutTaggerInputSchema).array(),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTagsCreateOrConnectWithoutTaggerInputSchema),z.lazy(() => EnergiesToTagsCreateOrConnectWithoutTaggerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTagsCreateManyTaggerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTagsCreateNestedManyWithoutTaggerInputSchema;
