import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsCreateWithoutTagInputSchema } from './EnergiesToTagsCreateWithoutTagInputSchema';
import { EnergiesToTagsUncheckedCreateWithoutTagInputSchema } from './EnergiesToTagsUncheckedCreateWithoutTagInputSchema';
import { EnergiesToTagsCreateOrConnectWithoutTagInputSchema } from './EnergiesToTagsCreateOrConnectWithoutTagInputSchema';
import { EnergiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema } from './EnergiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema';
import { EnergiesToTagsCreateManyTagInputEnvelopeSchema } from './EnergiesToTagsCreateManyTagInputEnvelopeSchema';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';
import { EnergiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema } from './EnergiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema';
import { EnergiesToTagsUpdateManyWithWhereWithoutTagInputSchema } from './EnergiesToTagsUpdateManyWithWhereWithoutTagInputSchema';
import { EnergiesToTagsScalarWhereInputSchema } from './EnergiesToTagsScalarWhereInputSchema';

export const EnergiesToTagsUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.EnergiesToTagsUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTagsCreateWithoutTagInputSchema),z.lazy(() => EnergiesToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => EnergiesToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => EnergiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTagsCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => EnergiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToTagsUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => EnergiesToTagsUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToTagsScalarWhereInputSchema),z.lazy(() => EnergiesToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTagsUpdateManyWithoutTagNestedInputSchema;
