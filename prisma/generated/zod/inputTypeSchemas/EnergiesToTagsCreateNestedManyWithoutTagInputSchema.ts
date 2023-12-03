import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsCreateWithoutTagInputSchema } from './EnergiesToTagsCreateWithoutTagInputSchema';
import { EnergiesToTagsUncheckedCreateWithoutTagInputSchema } from './EnergiesToTagsUncheckedCreateWithoutTagInputSchema';
import { EnergiesToTagsCreateOrConnectWithoutTagInputSchema } from './EnergiesToTagsCreateOrConnectWithoutTagInputSchema';
import { EnergiesToTagsCreateManyTagInputEnvelopeSchema } from './EnergiesToTagsCreateManyTagInputEnvelopeSchema';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';

export const EnergiesToTagsCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToTagsCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTagsCreateWithoutTagInputSchema),z.lazy(() => EnergiesToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => EnergiesToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTagsCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTagsCreateNestedManyWithoutTagInputSchema;
