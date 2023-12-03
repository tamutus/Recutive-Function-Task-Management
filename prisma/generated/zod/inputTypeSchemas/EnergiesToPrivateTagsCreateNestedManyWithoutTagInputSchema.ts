import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsCreateWithoutTagInputSchema } from './EnergiesToPrivateTagsCreateWithoutTagInputSchema';
import { EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema } from './EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema';
import { EnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema } from './EnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema';
import { EnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema } from './EnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema';
import { EnergiesToPrivateTagsWhereUniqueInputSchema } from './EnergiesToPrivateTagsWhereUniqueInputSchema';

export const EnergiesToPrivateTagsCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToPrivateTagsCreateWithoutTagInputSchema),z.lazy(() => EnergiesToPrivateTagsCreateWithoutTagInputSchema).array(),z.lazy(() => EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => EnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToPrivateTagsCreateNestedManyWithoutTagInputSchema;
