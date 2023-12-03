import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsCreateWithoutTagInputSchema } from './EnergiesToPrivateTagsCreateWithoutTagInputSchema';
import { EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema } from './EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema';
import { EnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema } from './EnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema';
import { EnergiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema } from './EnergiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema';
import { EnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema } from './EnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema';
import { EnergiesToPrivateTagsWhereUniqueInputSchema } from './EnergiesToPrivateTagsWhereUniqueInputSchema';
import { EnergiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema } from './EnergiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema';
import { EnergiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema } from './EnergiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema';
import { EnergiesToPrivateTagsScalarWhereInputSchema } from './EnergiesToPrivateTagsScalarWhereInputSchema';

export const EnergiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToPrivateTagsCreateWithoutTagInputSchema),z.lazy(() => EnergiesToPrivateTagsCreateWithoutTagInputSchema).array(),z.lazy(() => EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => EnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => EnergiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => EnergiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => EnergiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToPrivateTagsScalarWhereInputSchema),z.lazy(() => EnergiesToPrivateTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToPrivateTagsUpdateManyWithoutTagNestedInputSchema;
